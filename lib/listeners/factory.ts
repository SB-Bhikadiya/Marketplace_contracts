import { ethers } from "hardhat";
import { NFTFactory, NFTFactory__factory } from "../../typechain-types";
import { FACTORY_ADDRESS } from "../constants/address";
import NFTCollectionModel from "../models/nft-collection";

export async function listen() {
  const provider = new ethers.JsonRpcProvider("http://192.168.29.142:7545");

  const contract = new ethers.Contract(
    FACTORY_ADDRESS,
    NFTFactory__factory.abi,
    provider
  );
  const factory = contract.attach(FACTORY_ADDRESS) as NFTFactory;

  const EVENT_NAME = "CreatedNFTCollection";
  const event = factory.getEvent(EVENT_NAME);

  factory.on(
    event,
    async function (
      creator: string,
      nft: string,
      name: string,
      image: string,
      symbol: string,
      args
    ) {
      const collection = new NFTCollectionModel({
        creator,
        nft,
        name,
        image,
        symbol,
      });
      await collection.save();
    }
  );
  console.log("LISTENING START");
}
