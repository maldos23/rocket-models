# 🚀 Installation

To use these utility functions in your project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/yourrepository.git
```
Navigate into the cloned repository:

__Get your directory__
```bash
cd yourrepository
```

Install the necessary dependencies:

**With npm**
```bash
npm install @rocket/rocket-model@git+https://github.com/maldos23/rocket-models.git
```
**With yarn**

```bash
yarn add @rocket/rocket-model@git+https://github.com/maldos23/rocket-models.git
```

# 🤓 Introduction

This repository contains a set of utility functions for initializing connections to different types of databases. It supports MongoDB and Postgres databases. The main function, `initDatabase`, takes a URI and a variant option to determine which type of database to connect to. The `initMongo` and `initPostgress` functions are used to establish connections to MongoDB and Postgres databases respectively. The `DATABASE_VARIANTS` object is an enumeration of the supported database variants.

# 👾 Methods

| Name | Description | Data Type | Usage Example | Options |
| ---- | ----------- | --------- | ------------- | ------- |
| [`initDatabase`](index.js) | Initializes the connection to the database based on the provided URI and variant. | Function | `initDatabase("mongodb://localhost:27017/mydb", { variant: "mongo" })` | `variant`: "mongo" or "postgres" |
| [`initMongo`](db/mongo.js) | Initializes the connection to a MongoDB database. | Function | `initMongo("mongodb://localhost:27017/mydb")` | None |
| [`initPostgress`](db/posgress.js) | Initializes the connection to a Postgres database. | Function | `initPostgress("postgres://user:password@localhost:5432/mydb")` | None |
| [`DATABASE_VARIANTS`](index.js) | Enumeration of the supported database variants. | Object | `DATABASE_VARIANTS.MONGO` | None |

**Creator  [@maldos23](https://github.com/maldos23) ❤️ from Mx**