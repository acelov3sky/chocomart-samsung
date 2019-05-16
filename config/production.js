'use strict';

var
    _ = require('lodash')
    , webpack = require('webpack')
    , common = require('./common.js')
    , CompressionPlugin = require("compression-webpack-plugin")
;

module.exports = function(_path) {

    return {
        context: _path,
        devtool: false,
        watch: false,
        output: {
          publicPath: '/'
        },
        plugins: _.concat(common(_path).plugins, [
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
            new CompressionPlugin({
              asset: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$/,
              threshold: 10240,
              minRatio: 0
            })
        ])
    }
};
