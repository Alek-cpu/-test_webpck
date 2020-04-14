const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}


module.exports = {
    externals: { paths: PATHS },
    entry: PATHS.src ,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: ['file-loader'],
            },
            {
                test: /\.(gif|jpg|svg|png)$/,
                use: ['file-loader'],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: './style.css'}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/contact.html',
            filename: 'contact.html'
        }),
        new CopyWebpackPlugin([
            {from:'./src/img/vectors', to:'./assets'},
            {from:'./src/img/avatar', to:'./assets'},
        ])
    ]
};