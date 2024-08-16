import { Document, Schema, model, PopulatedDoc } from "mongoose";
import { IUser } from "./user";

export type TTRecordFinance = "EXPEND" | "INCOME";

export interface TFinance {
  subject: string;
  amount: number;
  type: TTRecordFinance;
  description: string;
  user: PopulatedDoc<IUser & Document>;
}

export interface IFinance extends Document, TFinance {}

const FinanceSchema = new Schema<IFinance>(
  {
    subject: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const FinanceModel = model<IFinance>("Finance", FinanceSchema);

export default FinanceModel;
