import { expect } from "chai";
import sinon from "sinon";
import { db } from "../index.js";

describe("initDatabase", () => {
  it("should throw an error if no URI is provided", async () => {
    try {
      await db.initDatabase();
    } catch (err) {
      expect(err.message).to.equal("URI is required");
    }
  });

  it("should throw an error if an invalid variant is provided", async () => {
    try {
      await db.initDatabase("mongodb://localhost:27017/myapp", {
        variant: "invalid",
      });
    } catch (err) {
      expect(err.message).to.equal("Invalid variant");
    }
  });

  it("should call initMongo if variant is mongo", async () => {
    const initMongoStub = sinon
      .stub(db, "initDatabase")
      .returns(Promise.resolve());
    await db.initDatabase("mongodb://localhost:27017/myapp", {
      variant: "mongo",
    });
    expect(initMongoStub.calledOnce).to.be.true;
    initMongoStub.restore();
  });

  it("should call initPostgress if variant is postgres", async () => {
    const initPostgressStub = sinon
      .stub(db, "initDatabase")
      .returns(Promise.resolve());
    await db.initDatabase("postgresql://localhost:5432/myapp", {
      variant: "postgres",
    });
    expect(initPostgressStub.calledOnce).to.be.true;
    initPostgressStub.restore();
  });
});
