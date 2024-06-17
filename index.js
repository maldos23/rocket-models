import initPostgress from "./db/posgress.js";
import initMongo from "./db/mongo.js";
import Product from "./models/mongo/product.model.js";
import Account from "./models/mongo/account.model.js";

// ENUMS
const DATABASE_VARIANTS = { MONGO: "mongo", POSTGRES: "postgres" };

/**
 * Initializes the database connection based on the provided URI and variant.
 *
 * @param {string} URI - The URI for the database connection.
 * @param {object} options - The options object.
 * @param {string} options.variant - The variant of the database (default: "mongo").
 * @throws {Error} If the URI is not provided or if the variant is invalid.
 * @returns {Promise} A promise that resolves when the database is initialized.
 */
function initDatabase(URI = null, { variant = "mongo" } = {}) {
  if (!URI) {
    throw new Error("URI is required");
  }

  // Call the routine for init data base
  switch (variant) {
    case DATABASE_VARIANTS.MONGO:
      return initMongo(URI);
    case DATABASE_VARIANTS.POSTGRES:
      return initPostgress(URI);
    default:
      throw new Error("Invalid variant");
  }
}

const db = {
  initDatabase,
  config: { types: DATABASE_VARIANTS },
};

const models = {
  mongo: {
    Product,
    Account,
  },
};

export { db, models };
