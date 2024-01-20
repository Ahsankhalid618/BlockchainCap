import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState) return;

  try{
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongo connection established.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Error connecting to Mongoose");
  }
}

export default connect;
