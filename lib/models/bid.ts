import mongoose, { Schema } from "mongoose";
import { IUser } from "./user";

export interface IBid extends Document {
  value: number;
  nft: string;
  author: IUser;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
}

export const BidSchema: Schema<IBid> = new Schema({
  value: { type: Number, required: true },
  nft: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  published_at: {     
    type: Date,
    default: Date.now, // Set default value to current date and time
  },
  created_at: {
    type: Date,
    default: Date.now, // Set default value to current date and time
  },
  updated_at: {
    type: Date,
    default: Date.now, // Set default value to current date and time
  },
});

export const BidModel = mongoose.model<IBid>("Bid", BidSchema);
