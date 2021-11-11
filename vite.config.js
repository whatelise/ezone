// vite.config.jsconst { resolve } = require("path");

module.exports = {
  base: "./ezoneproject", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
};
