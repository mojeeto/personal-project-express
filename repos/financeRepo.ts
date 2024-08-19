import FinanceModel, { TFinance } from "../models/finance";

/**
 * This function is for get all records of finance model.
 *
 * @async
 * @function findFinanceRecord
 * @returns A List of Finance Records
 *
 * */
export async function findFinanceRecord() {
  return await FinanceModel.find().exec();
}

/**
 * This function gets data about new record of finance,
 * then put it in to db.
 * This function do not check userId is valid or not.
 *
 * @async
 * @function createFinanceRecord
 * @param {Omit<TFinance, "user">} financeData all data need for create new record
 * @param {string} userId point to which user with this id create the finance record
 * @returns new finance record model
 * */
export async function createFinanceRecord(
  financeData: Omit<TFinance, "user">,
  userId: string,
) {
  const newFinanceModel = new FinanceModel({ ...financeData, user: userId });
  return await newFinanceModel.save();
}
