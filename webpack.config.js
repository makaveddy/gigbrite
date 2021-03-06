const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/gigbrite.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            // {
            //     include: SRC,
            //     test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: ['file-loader'],
            // },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};