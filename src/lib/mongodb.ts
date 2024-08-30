import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    const mongoURI = process.env.MONGODB_URI as string;

    if (!mongoURI) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables.",
      );
    }

    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
