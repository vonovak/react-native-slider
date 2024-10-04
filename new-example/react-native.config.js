const project = (() => {
  try {
    const { configureProjects } = require("react-native-test-app");
    return configureProjects({
      android: {
        sourceDir: "android",
      },
      ios: {
        sourceDir: "ios",
      },
      windows: {
        sourceDir: "windows",
        solutionFile: "windows/slider-example.sln",
      },
    });
  } catch (_) {
    return undefined;
  }
})();

let config = {
  ...(project
    ? {
        dependencies: {
          // Help rn-cli find and autolink this library
          "@react-native-community/slider": {
            root: __dirname + "/../package",
          },
        },
      }
    : undefined),
  ...(project ? { project } : undefined),
};
// console.log({ config: JSON.stringify(config, null, 2) });
module.exports = config;
