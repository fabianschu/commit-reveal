const Hash = artifacts.require("Hash");

contract("Hash", (accounts) => {
  it("should put modify the secret", () =>
    Hash.deployed()
      .then((instance) => instance.getBalance.call(accounts[0]))
      .then((balance) => {
        assert.equal(
          balance.valueOf(),
          10000,
          "10000 wasn't in the first account"
        );
      }));
});
