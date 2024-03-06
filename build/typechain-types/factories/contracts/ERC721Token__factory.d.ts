import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { ERC721Token, ERC721TokenInterface } from "../../contracts/ERC721Token";
type ERC721TokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721Token__factory extends ContractFactory {
    constructor(...args: ERC721TokenConstructorParams);
    getDeployTransaction(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC721Token & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC721Token__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001973380380620019738339810160408190526200003491620001b5565b81813382826000620000478382620002ae565b506001620000568282620002ae565b5050506001600160a01b0381166200008857604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000093816200009e565b50505050506200037a565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200011857600080fd5b81516001600160401b0380821115620001355762000135620000f0565b604051601f8301601f19908116603f01168101908282118183101715620001605762000160620000f0565b816040528381526020925086838588010111156200017d57600080fd5b600091505b83821015620001a1578582018301518183018401529082019062000182565b600093810190920192909252949350505050565b60008060408385031215620001c957600080fd5b82516001600160401b0380821115620001e157600080fd5b620001ef8683870162000106565b935060208501519150808211156200020657600080fd5b50620002158582860162000106565b9150509250929050565b600181811c908216806200023457607f821691505b6020821081036200025557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a957600081815260208120601f850160051c81016020861015620002845750805b601f850160051c820191505b81811015620002a55782815560010162000290565b5050505b505050565b81516001600160401b03811115620002ca57620002ca620000f0565b620002e281620002db84546200021f565b846200025b565b602080601f8311600181146200031a5760008415620003015750858301515b600019600386901b1c1916600185901b178555620002a5565b600085815260208120601f198616915b828110156200034b578886015182559484019460019091019084016200032a565b50858210156200036a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6115e9806200038a6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610257578063c87b56dd1461026a578063d3fc98641461027d578063e985e9c514610290578063f2fde38b146102a357600080fd5b806370a0823114610202578063715018a6146102235780638da5cb5b1461022b57806395d89b411461023c578063a22cb4651461024457600080fd5b806323b872dd116100f457806323b872dd146101a35780633bb3a24d146101b657806342842e0e146101c957806342966c68146101dc5780636352211e146101ef57600080fd5b806301ffc9a71461012657806306fdde031461014e578063081812fc14610163578063095ea7b31461018e575b600080fd5b6101396101343660046110ca565b6102b6565b60405190151581526020015b60405180910390f35b6101566102e1565b6040516101459190611137565b61017661017136600461114a565b610373565b6040516001600160a01b039091168152602001610145565b6101a161019c36600461117f565b61039c565b005b6101a16101b13660046111a9565b6103ab565b6101566101c436600461114a565b61043b565b6101a16101d73660046111a9565b610548565b6101a16101ea36600461114a565b610568565b6101766101fd36600461114a565b6105ab565b6102156102103660046111e5565b6105b6565b604051908152602001610145565b6101a16105fe565b6007546001600160a01b0316610176565b610156610612565b6101a1610252366004611200565b610621565b6101a16102653660046112c8565b61062c565b61015661027836600461114a565b610643565b6101a161028b366004611344565b610754565b61013961029e3660046113af565b610768565b6101a16102b13660046111e5565b610796565b60006001600160e01b03198216632483248360e11b14806102db57506102db826107d1565b92915050565b6060600080546102f0906113e2565b80601f016020809104026020016040519081016040528092919081815260200182805461031c906113e2565b80156103695780601f1061033e57610100808354040283529160200191610369565b820191906000526020600020905b81548152906001019060200180831161034c57829003601f168201915b5050505050905090565b600061037e82610821565b506000828152600460205260409020546001600160a01b03166102db565b6103a782823361085a565b5050565b6001600160a01b0382166103da57604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006103e7838333610867565b9050836001600160a01b0316816001600160a01b031614610435576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103d1565b50505050565b606061044682610960565b6104aa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103d1565b600082815260086020526040902080546104c3906113e2565b80601f01602080910402602001604051908101604052809291908181526020018280546104ef906113e2565b801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b50505050509050919050565b6105638383836040518060200160405280600081525061062c565b505050565b61057181610982565b6000818152600860205260409020805461058a906113e2565b1590506105a85760008181526008602052604081206105a891611066565b50565b60006102db82610821565b60006001600160a01b0382166105e2576040516322718ad960e21b8152600060048201526024016103d1565b506001600160a01b031660009081526003602052604090205490565b6106066109bd565b61061060006109ea565b565b6060600180546102f0906113e2565b6103a7338383610a3c565b6106378484846103ab565b61043584848484610adb565b606061064e82610821565b5060008281526006602052604081208054610668906113e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610694906113e2565b80156106e15780601f106106b6576101008083540402835291602001916106e1565b820191906000526020600020905b8154815290600101906020018083116106c457829003601f168201915b5050505050905060006106ff60408051602081019091526000815290565b90508051600003610711575092915050565b81511561074357808260405160200161072b92919061141c565b60405160208183030381529060405292505050919050565b61074c84610c04565b949350505050565b61075e8383610c79565b6105638282610cde565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61079e6109bd565b6001600160a01b0381166107c857604051631e4fbdf760e01b8152600060048201526024016103d1565b6105a8816109ea565b60006001600160e01b031982166380ac58cd60e01b148061080257506001600160e01b03198216635b5e139f60e01b145b806102db57506301ffc9a760e01b6001600160e01b03198316146102db565b6000818152600260205260408120546001600160a01b0316806102db57604051637e27328960e01b8152600481018490526024016103d1565b6105638383836001610d2e565b6000828152600260205260408120546001600160a01b039081169083161561089457610894818486610e34565b6001600160a01b038116156108d2576108b1600085600080610d2e565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610901576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60008181526008602052604081208054610979906113e2565b15159392505050565b60006109916000836000610867565b90506001600160a01b0381166103a757604051637e27328960e01b8152600481018390526024016103d1565b6007546001600160a01b031633146106105760405163118cdaa760e01b81523360048201526024016103d1565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a6e57604051630b61174360e31b81526001600160a01b03831660048201526024016103d1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561043557604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610b1d90339088908790879060040161144b565b6020604051808303816000875af1925050508015610b58575060408051601f3d908101601f19168201909252610b5591810190611488565b60015b610bc1573d808015610b86576040519150601f19603f3d011682016040523d82523d6000602084013e610b8b565b606091505b508051600003610bb957604051633250574960e11b81526001600160a01b03851660048201526024016103d1565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b14610bfd57604051633250574960e11b81526001600160a01b03851660048201526024016103d1565b5050505050565b6060610c0f82610821565b506000610c2760408051602081019091526000815290565b90506000815111610c475760405180602001604052806000815250610c72565b80610c5184610e98565b604051602001610c6292919061141c565b6040516020818303038152906040525b9392505050565b6001600160a01b038216610ca357604051633250574960e11b8152600060048201526024016103d1565b6000610cb183836000610867565b90506001600160a01b03811615610563576040516339e3563760e11b8152600060048201526024016103d1565b6000828152600660205260409020610cf682826114f3565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b8080610d4257506001600160a01b03821615155b15610e04576000610d5284610821565b90506001600160a01b03831615801590610d7e5750826001600160a01b0316816001600160a01b031614155b8015610d915750610d8f8184610768565b155b15610dba5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103d1565b8115610e025783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610e3f838383610f2b565b610563576001600160a01b038316610e6d57604051637e27328960e01b8152600481018290526024016103d1565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103d1565b60606000610ea583610f8e565b600101905060008167ffffffffffffffff811115610ec557610ec561123c565b6040519080825280601f01601f191660200182016040528015610eef576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ef957509392505050565b60006001600160a01b0383161580159061074c5750826001600160a01b0316846001600160a01b03161480610f655750610f658484610768565b8061074c5750506000908152600460205260409020546001600160a01b03908116911614919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610fcd5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610ff9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061101757662386f26fc10000830492506010015b6305f5e100831061102f576305f5e100830492506008015b612710831061104357612710830492506004015b60648310611055576064830492506002015b600a83106102db5760010192915050565b508054611072906113e2565b6000825580601f10611082575050565b601f0160209004906000526020600020908101906105a891905b808211156110b0576000815560010161109c565b5090565b6001600160e01b0319811681146105a857600080fd5b6000602082840312156110dc57600080fd5b8135610c72816110b4565b60005b838110156111025781810151838201526020016110ea565b50506000910152565b600081518084526111238160208601602086016110e7565b601f01601f19169290920160200192915050565b602081526000610c72602083018461110b565b60006020828403121561115c57600080fd5b5035919050565b80356001600160a01b038116811461117a57600080fd5b919050565b6000806040838503121561119257600080fd5b61119b83611163565b946020939093013593505050565b6000806000606084860312156111be57600080fd5b6111c784611163565b92506111d560208501611163565b9150604084013590509250925092565b6000602082840312156111f757600080fd5b610c7282611163565b6000806040838503121561121357600080fd5b61121c83611163565b91506020830135801515811461123157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561126d5761126d61123c565b604051601f8501601f19908116603f011681019082821181831017156112955761129561123c565b816040528093508581528686860111156112ae57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156112de57600080fd5b6112e785611163565b93506112f560208601611163565b925060408501359150606085013567ffffffffffffffff81111561131857600080fd5b8501601f8101871361132957600080fd5b61133887823560208401611252565b91505092959194509250565b60008060006060848603121561135957600080fd5b61136284611163565b925060208401359150604084013567ffffffffffffffff81111561138557600080fd5b8401601f8101861361139657600080fd5b6113a586823560208401611252565b9150509250925092565b600080604083850312156113c257600080fd5b6113cb83611163565b91506113d960208401611163565b90509250929050565b600181811c908216806113f657607f821691505b60208210810361141657634e487b7160e01b600052602260045260246000fd5b50919050565b6000835161142e8184602088016110e7565b8351908301906114428183602088016110e7565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061147e9083018461110b565b9695505050505050565b60006020828403121561149a57600080fd5b8151610c72816110b4565b601f82111561056357600081815260208120601f850160051c810160208610156114cc5750805b601f850160051c820191505b818110156114eb578281556001016114d8565b505050505050565b815167ffffffffffffffff81111561150d5761150d61123c565b6115218161151b84546113e2565b846114a5565b602080601f831160018114611556576000841561153e5750858301515b600019600386901b1c1916600185901b1785556114eb565b600085815260208120601f198616915b8281101561158557888601518255948401946001909101908401611566565b50858210156115a35787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212201453f1c1331b9f6a1c4b702b1aa76d13bd885736e47ec1d6e51cc355c7ec11b264736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC721IncorrectOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ERC721InsufficientApproval";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidOperator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC721InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ERC721NonexistentToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "approved";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_fromTokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_toTokenId";
            readonly type: "uint256";
        }];
        readonly name: "BatchMetadataUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "MetadataUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getTokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "tokenURI";
            readonly type: "string";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC721TokenInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC721Token;
}
export {};
