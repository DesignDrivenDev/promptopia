import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log(`MongoDB is connected.`);
    return;
  }
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      dbName: "share_Prompt",
      //   @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
