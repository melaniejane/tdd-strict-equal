const describe = require("mocha").describe;

const it = require("mocha").it;

const expect = require("chai").expect;

const strictEqual = require("./index");

describe("strictEqual", () => {
  it("returns true 5 and 5.", () => {
    expect(strictEqual(5, 5)).to.equal(true);
  });

  it("returns true 5 and '5'.", () => {
    expect(strictEqual(5, "5")).to.equal(false);
  });

  it("returns true 'a' and 'b'.", () => {
    expect(strictEqual("a", "b")).to.equal(false);
  });

  it("returns true 'a' and 'a'.", () => {
    expect(strictEqual("a", "a")).to.equal(true);
  });

  it("returns true 'c' and 'c'.", () => {
    expect(strictEqual("c", "c")).to.equal(true);
  });

  it("returns true '7' and 'x'.", () => {
    expect(strictEqual("7", "x")).to.equal(false);
  });
});
