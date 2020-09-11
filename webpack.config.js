const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-nested'),

]


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join (__dirname , '/dist'),
        filename: 'index_bundle.js',
        publicPath:'/',
    },
    devServer:{
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?url=false' , {loader:'postcss-loader', options: {plugins: postCSSPlugins}}]
            },
            {
                test:/\.(png|jpe?g|gif|pdf)$/,
                use: {loader: 'file-loader'},
            },
            {
                test:/\.(html)$/,
                use:{loader: 'html-loader'}
            }

        ]
        
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        )
    ]
}