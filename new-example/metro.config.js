const { makeMetroConfig } = require("@rnx-kit/metro-config");
module.exports = makeMetroConfig({
  watchFolders: [__dirname + "/../package"],
  resolver: {
    // for some reason, since 0.73, metro does not see this
    extraNodeModules: {
      "@react-native-community/slider": __dirname + "/../package",
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});
