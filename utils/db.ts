import mongoose from "mongoose";
import Log from "./logging";

export default async function ConnectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/personal-project");
    Log("INFO", {
      subject: "Connect to DB",
      message: "Connecting to DB is successfull.",
    });
  } catch (err) {
    console.log(err);
  }
}
