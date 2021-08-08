const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
        clientLogLevel: 'silent',
        // setup: function (app) {
        //     app.use('/ajax', ApiMocker('./mocks'));
        // },
        proxy: {}
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})