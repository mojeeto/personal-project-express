import { model, Document, Schema } from "mongoose";

// T for general usage
export interface TUser {
  name: string;
  amount_money: number;
}

// I for create Schema and model
export interface IUser extends TUser, Document {}

// create Schema
const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    amount_money: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// create and export default model
const UserModel = model<IUser>("User", UserSchema);
export default UserModel;
