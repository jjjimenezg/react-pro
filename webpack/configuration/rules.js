// Dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Package.json
import pkg from '../../package.json';

export default type => {
  const rules = [
    {
      test: /.(js)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }
  ];

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true
          }
        },
        'sass-loader',
      ]
    });
  } else {
    rules.push({
      test: /.scss$/, // Can be: .scss or .styl or .less
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader' // sass-loader or stylus-loader or less-loader
        }
      ]
    });
  }

  return rules;
};
