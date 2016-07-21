var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../../')

var appDir = config.appDir;

module.exports = {
  entry: {
    //app: './src/main.js'
    app: appDir + '/src/app.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.vue'],
  //   fallback: [path.join(__dirname, '../../node_modules')],
  //   alias: {
  //     'src': path.resolve(__dirname, '../src'),
  //     'assets': path.resolve(__dirname, '../src/assets'),
  //     'components': path.resolve(__dirname, '../src/components')
  //   }
  // },
  resolveLoader: {
    fallback: [path.join(__dirname, '../../node_modules')]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.vue$/,
      //   loader: 'eslint',
      //   include: projectRoot,
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint',
      //   include: projectRoot,
      //   exclude: /node_modules/
      // }
    ],
    loaders: [
      { test: /\.hbs$/, loader: "handlebars" },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.less$/,
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
        loader: 'less'
      },
      {
        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        loader: 'sass'
      },
      {
        test: /\.css$/,
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        loader: 'css'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          plugins: ['transform-runtime',
            "babel-plugin-transform-es2015-destructuring",
            "babel-plugin-transform-es2015-modules-commonjs",
            "babel-plugin-transform-es3-property-literals",
            "babel-plugin-transform-es3-member-expression-literals"
          ],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader!jsx-loader?harmony',
        exclude: /node_modules/,
        include: __dirname
      },
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
