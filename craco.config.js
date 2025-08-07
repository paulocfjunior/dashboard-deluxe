const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    plugins: {
      add: [
        // Add the bundle analyzer plugin only when we run the "analyze" script
        process.env.ANALYZE === "true" && new BundleAnalyzerPlugin(),
      ].filter(Boolean), // .filter(Boolean) removes the plugin if it's falsy
    },
  },
};
