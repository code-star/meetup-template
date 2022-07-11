const configJson = require("./config.json");

module.exports = {
  basePath: configJson.basePath,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
