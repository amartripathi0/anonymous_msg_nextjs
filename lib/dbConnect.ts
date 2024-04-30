import mongoose from "mongoose";

type ConnectionObejct = {
  isConnected?: number;
};

const connection: ConnectionObejct = {};

async function dbConnect(): Promise<void> {
  /* in nextjs things are only called when needed, since our db should always be connected,
    hence in nextjs the connection request will be made multiple times which will choke the app
    therefore we are checking if the connection is already present then return otherwise make a new db connection.
    */
  if (connection.isConnected) {
    console.log("Database is already connected!");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Database connection failed!");
    process.exit(1);
  }
}

export default dbConnect;
