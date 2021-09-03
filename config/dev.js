const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./common')

module.exports = (env, argv) => merge(common(env, argv), {
    mode: 'development',
    devtool: 'source-map',
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