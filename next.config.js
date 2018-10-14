const withSass = require('@zeit/next-sass');
const MergeFilesPlugin = require('merge-file-loader-files-webpack-plugin');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: 'auction_[local]',
  },
  webpack: (config, options) => {
    const { isServer } = options;
    if (isServer) {
      options.extractCSSPlugin.filename = 'static/[name].css';
      config.plugins.push(new MergeFilesPlugin({
        filename: 'static/style.css',
        test: /\.css/,
        deleteSourceFiles: true,
      }));
    }
    // config.module.rules.push({
    //   test: /\.jsx?$/,
    //   exclude: /(node_modules|static)/,
    //   loader: 'eslint-loader',
    //   options: {
    //     failOnError: true,
    //   },
    // });
    return config;
  },
  exportPathMap: () => (
    {
      '/': { page: '/' },
    }
  ),
});
