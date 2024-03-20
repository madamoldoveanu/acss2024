const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
let fs = require('fs');
const paths = {
    /* Path to source files directory */
    source: path.resolve(__dirname, './src/'),
    /* Path to built files directory */
    output: path.resolve(__dirname, './dist/'),
};
const favicon = path.resolve(paths.source, 'images', 'favicon.ico');

const myHeader = fs.readFileSync(paths.source + '/header.html');
const myFooter = fs.readFileSync(paths.source + '/footer.html');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Webpack Example App',
            header: 'Webpack Example Title',
            metaDesc: 'Webpack Example Description',
            favicon: favicon,
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
            favicon: favicon,
            myHeader: myHeader,
            myFooter: myFooter,
            template: './src/index.html',
            filename: 'contact.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(paths.source, 'images'),
                    to: path.resolve(paths.output, 'images'),
                    toType: 'dir',
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
                // {
                //     from: path.resolve(paths.source, 'videos'),
                //     to: path.resolve(paths.output, 'videos'),
                //     toType: 'dir',
                //     globOptions: {
                //         ignore: ['*.DS_Store', 'Thumbs.db'],
                //     },
                // },
            ],
        }),
    ],

    mode: 'development',// default production
    watch: true,
    output: {
        path: paths.output,
        filename: '[name].bundle.js',
        clean: true, // strege folderul dist inainte sa genereze altul

    },
    module: {
        rules: [
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                type: 'asset',
                loader: 'file-loader',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192,
                    },
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },


};