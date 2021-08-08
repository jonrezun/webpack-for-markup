const isProd = process.env.NODE_ENV === 'production';

const path = require('path')
const paths = require('./paths')
const fs = require('fs');

// webpack plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


//setting for html plugin
function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            hash: true,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
            isProduction: isProd,
        })
    })
}
const htmlPlugins = generateHtmlPlugins('../src/html/pages');

module.exports = {
    entry: {
        main: [
            `${paths.src}/js/index.js`,
            `${paths.src}/styles/main.scss`,
        ],
    },
    output: {
        path: paths.build,
        filename: 'js/[name].bundle.js',
        // assetModuleFilename: 'images/[name][ext]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
        }),
        new CopyPlugin({
            patterns: [
                { context: "src/static", from: "*", to: "./", force: true },
            ],
        }),
        new Dotenv({
            path: './config/.env'
        })
    ]
        .concat(htmlPlugins), // templates and layouts,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isProd,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: isProd, }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isProd
                        }
                    },
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext]',
                },
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "html-loader", options: {
                            minimize: false,
                            sources: {
                                urlFilter: (attribute, value, resourcePath) => {
                                    if (/\.js$/.test(value)) {
                                        return false;
                                    }

                                    if (/\.css$/.test(value)) {
                                        return false;
                                    }

                                    return true;
                                },
                            }
                        }
                    },
                    { loader: "pug-html-loader", options: { pretty: true } }
                ]
            },
        ]
    }
}