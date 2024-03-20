const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let fs = require('fs');

const myHeader = fs.readFileSync(__dirname + '/src/header.html');
const myFooter = fs.readFileSync(__dirname + '/src/footer.html');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            myHeader: myHeader,
            myFooter: myFooter,
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Contact Webpack Example App',
            header: 'Contact Webpack Example Title',
            metaDesc: 'Contact Webpack Example Description',
            myHeader: myHeader,
            myFooter: myFooter,
            template: './src/index.html',
            filename: 'contact.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],

    mode: 'development',// default production
    watch: true,
    output: {
        path: path.join(__dirname, 'dist'),

        clean: true // strege folderul dist inainte sa genereze altul
    },
    module: {
        rules: [
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
    },


};