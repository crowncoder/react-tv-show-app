const { useBabelRc, addBundleVisualizer, override } = require('customize-cra')

module.exports = override(
  useBabelRc(),
  addBundleVisualizer({
    analyzerMode: 'static',
    reportFilename: 'report.html',
  }, true),
  (config) => {
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    const jsLoader = loaders[1];
    jsLoader.use =
      [
        require.resolve('thread-loader'),
        { loader: jsLoader.loader, options: jsLoader.options }
      ];
    delete jsLoader.loader;
    delete jsLoader.options;
    return config;
  }
);