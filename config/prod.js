const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
    mode: 'production',
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