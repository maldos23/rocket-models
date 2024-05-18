import colors from "colors";
import mongoose from "mongoose";
import loadingConsole from "../assets/loadingConsole.js";

/**
 * Initializes the MongoDB connection and sets up event listeners.
 */
export default function initMongo(URI) {
  /**
   * The loader variable is used to store the loader object.
   * @type {null}
   */
  let loader = null;

  /**
   * The MongoDB connection object.
   * @type {import("mongoose").Connection}
   */
  const db = mongoose.connection;

  /**
   * The MongoDB connection URI.
   * @type {string}
   */
  const URI_DB = URI;

  /**
   * The options for the MongoDB connection.
   * @type {import("mongoose").ConnectOptions}
   */
  const optionsConnection = {
    retryWrites: true,
  };

  /**
   * Starts the loading console animation when connecting to the database.
   */
  function startLoadingConsole() {
    clearInterval(loader);
    let id = loadingConsole(`Connecting to the database ✅`);
    loader = id;
  }

  /**
   * Handles the "connected" event when the database connection is established.
   */
  function handleConnected() {
    clearInterval(loader);
    console.clear();
    console.log(`\n Database connected ✅ \n`);
  }

  /**
   * Handles the "error" event when there is an error in the database connection.
   * @param {Error} error - The error object.
   */
  function handleError(error) {
    console.log(`\n ❌ Database error: \n`, error);
  }

  /**
   * Handles the "disconnected" event when the database connection is lost.
   */
  function handleDisconnected() {
    console.log(
      colors.yellow(`\n ❌ Database disconnected: %s\n`),
      new Date().toLocaleString()
    );
  }

  db.on("connecting", startLoadingConsole);
  db.on("connected", handleConnected);
  db.on("error", handleError);
  db.on("disconnected", handleDisconnected);

  mongoose.connect(URI_DB, optionsConnection);
}
