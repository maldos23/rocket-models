import { Sequelize } from "sequelize";

/**
 * Initializes the Postgres connection using the provided URI.
 *
 * @param {string} uri - The URI for the Postgres database.
 * @returns {Promise<void>} - A promise that resolves when the connection is established successfully.
 * @throws {Error} - If unable to connect to the database.
 */
export default async function initPostgress(uri) {
  const sequelize = new Sequelize(uri);
  // Additional code to initialize the Postgres connection

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

