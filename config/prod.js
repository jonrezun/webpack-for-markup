const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = (env, argv) => merge(common(env, argv), {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
        ],
    },
    optimization: {
        runtimeChunk: 'single'
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
})