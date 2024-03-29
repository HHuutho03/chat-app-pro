import mongoose from "mongoose";
const connectToMongDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to Mongo");
  } catch (error) {
    console.log("Error connecting mongooseDb", error.message);
  }
};
export default connectToMongDb;
