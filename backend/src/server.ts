import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000;

async function server() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
