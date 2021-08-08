const isProd = process.env.NODE_ENV === 'production';

const path = require('path')
const webpack = require('webpack');
const fs = require('fs');

// webpack plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
const htmlPlugins = generateHtmlPlugins('./src/html/pages');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, './src/js/index.js'),
            path.resolve(__dirname, './src/styles/main.scss')
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "src", to: "dest" },
            ],
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
                test: /\.pug$/,
                use: [
                    { loader: "html-loader", options: { minimize: false } },
                    { loader: "pug-html-loader", options: { pretty: true } }
                ]
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
        ]
    }
}