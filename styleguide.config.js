module.exports = {
  components: 'src/components/**/*.tsx',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
      ],
    },
  },
};
