import { model, Document, Schema } from "mongoose";

// T for general usage
export interface TUser {
  name: string;
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
  },
  {
    timestamps: true,
  },
);

// create and export default model
const UserModel = model<IUser>("user", UserSchema);
export default UserModel;
