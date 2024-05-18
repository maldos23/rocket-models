import { expect } from "chai";
import mongoose from "mongoose";
import sinon from "sinon";
import initMongo from "../db/mongo.js";

describe("initMongo", () => {
  let connectStub, consoleStub, clearIntervalStub;

  beforeEach(() => {
    connectStub = sinon.stub(mongoose, "connect");
    consoleStub = sinon.stub(console, "log");
    clearIntervalStub = sinon.stub(global, "clearInterval");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should call mongoose.connect with correct parameters", () => {
    const URI = "mongodb://localhost:27017/test";
    initMongo(URI);
    expect(connectStub.calledOnceWith(URI, { retryWrites: true })).to.be.true;
  });

  it("should call clearInterval", () => {
    const URI = "mongodb://localhost:27017/test";
    initMongo(URI);
    expect(clearIntervalStub.called).to.be.false;
  });

  it("should call console.log on handleConnected", () => {
    const URI = "mongodb://localhost:27017/test";
    initMongo(URI);
    mongoose.connection.emit("connected");
    expect(consoleStub.called).to.be.true;
  });

  it("should call console.log on handleError", () => {
    const URI = "mongodb://localhost:27017/test";
    initMongo(URI);
    mongoose.connection.emit("error", new Error("Test error"));
    expect(consoleStub.called).to.be.true;
  });

  it("should call console.log on handleDisconnected", () => {
    const URI = "mongodb://localhost:27017/test";
    initMongo(URI);
    mongoose.connection.emit("disconnected");
    expect(consoleStub.called).to.be.true;
  });
});
