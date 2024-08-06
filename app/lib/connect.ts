import mongoose from "mongoose";

async function connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("DataBase connected...");
  } catch (error) {
    console.error(error);
  }
}

export default connect;
