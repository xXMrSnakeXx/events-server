import mongoose from "mongoose";
import { app } from "./app.js";
import "dotenv/config";

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", false);
const startServer = async () => {
  try {
    await mongoose.connect(DB_HOST);

    app.listen(PORT, () =>
      console.log(`Database connection successful ${PORT}`)
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

startServer();
