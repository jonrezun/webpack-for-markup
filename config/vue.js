const paths = require('./paths')
// webpack plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = (env, argv) => ({
        devtool: argv.mode == "development" ? "source-map" : false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: `${paths.src}/vue`,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.vue$/,
                    include: `${paths.src}/vue`,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                            }
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    include: `${paths.src}/vue`,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: argv.mode == 'development',
                                minimize: true,
                                url: false
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: argv.mode == 'development'
                            }
                        }
                    ]
                }
            ]
        },
        optimization: argv.mode == "development" ? {} : {
            minimizer: [
                new UglifyJsPlugin(),
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
        ]
});
