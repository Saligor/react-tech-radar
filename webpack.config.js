module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
    }
};