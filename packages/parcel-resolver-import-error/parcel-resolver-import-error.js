const { Resolver } = require("@parcel/plugin");

module.exports = new Resolver({
  async resolve({ specifier, dependency, options, logger }) {
    try {
      const WebCPromise = import("@11ty/webc").catch(e => {throw e});
      const WebC = await WebCPromise;
    } catch (e) {
      console.error(e);
    }
    return null;
  },
});
