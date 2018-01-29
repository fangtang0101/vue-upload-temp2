
const path = require('path') 
//# path 这个库，主要是处理 路径的拼接等(因为在wind 和 mac等平台存在不同的差异，所以用path可以加兼容)，win 路径 \ mac 路径 /
const webpack = require('webpack')
//#拼接 path的方法
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  // entry: './src/index.js',
    // entry: './src/first/index.js',
    entry: './src/npm.js',                      // # 打包的文件 入口，此处是一个
    output: {                                   // # 打包的文件 出口 配置
    path: path.resolve(__dirname, './dist'),    // # 打包出来的文件的存放路径 
    publicPath: '/dist/',                       // # 线上环境时候 在 url 后面 加上 此处路径(剧烈  url= xxx/123.jpg  ,变成url= xxx/dist/123.jpg)
    filename: 'vue-count-to.min.js',            // # 打包后的文件名字
    // library: 'CountTo',
    // library: 'firstVue',  // require时候的模块名
    libraryTarget: 'umd',                       // # 可以生成 符合不同规范的 代码导出，比如 生成后 可以 ADM下使用，也可以commonjs下使用，也可以直接 js 引入
    umdNamedDefine: true                        // # 将以AMD module 命名
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,                     // # 匹配以 js 或则 vue 结尾的文件
        loader: 'eslint-loader',
        enforce: 'pre',                          // # 加载器的加载顺序，默认正常顺序， 可选值 pre (前)  post (后)
        include: [resolve('src'), resolve('test')],  // 只检测哪些文件
        options: {                                        // # 对loader 的配置的进一步参数说明，经常用于 图片装换成 base64
          formatter: require('eslint-friendly-formatter')  // # 在编译的时候，让eslint 中的错误 出现在 终端上面
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/                       // 这些文件 不需要检测(排除这些文件)
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'                // #图片 导出后 带哈希值 ??? ext 是什么
        }
      }
    ]
  },
  resolve: {
    alias: {                                          // 设置模块别名
      vue$: 'vue/dist/vue.esm.js'                     // # vue$ 代表精准 别名 比如(import test1 form vue[此处的vue 可转换成vue/dist/vue.esm.js])
    }                                                 // 如果 import test1 form A/vue,是不会转换的
                                                     // 详细请参考 http://www.css88.com/doc/webpack2/configuration/resolve/
  },
  externals: {                                       //  不处理相关的依赖  可以直接 从CDN 导入，直接导入 ？？？？
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  devServer: {                                        // #主要是 webpack-dev-service 的配套的配置
    historyApiFallback: true,                         // #在单页面应用中 有两种模式 h5 的history 与 hash ，当是设置成为 history模式的时候，刷新浏览器的时候会出现，404，(刷新的时候是通过当前的路径去 来访问后台，出现404，因为这是但也应用，只有index.html) 设置为true，那么的路径刷新访问的是 index.html

    noInfo: true                                       // # ?????
  },
  performance: {                                       // #配置 如何 展示 性能报警问题（比如文件大于1000k 以什么样的形式展示在控制台上）
    hints: false                                       // # 提示 boolen|error|warning  
                                                       // # http://www.css88.com/doc/webpack2/configuration/performance/
  },
  devtool: '#source-map'                               // # 主要是 打包的时候 控制台 输出的 形式不一样，一共有7 种模式  详见 https://www.cnblogs.com/hhhyaaon/p/5657469.html
}

if (process.env.NODE_ENV === 'production') {  // 在环境为 production的时候 设置一些参数
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([  // 设置插件
    new webpack.DefinePlugin({         // 设置全局变量  http://www.css88.com/doc/webpack2/plugins/define-plugin/
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({    // UglifyJsPlugin 是webpack 自带的 代码压缩 插件 (ps:一般加入这个插件，速度回非常的慢，所以一般在build的时候用)
      sourceMap: true,    // ???
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({  //为了兼容部分旧式loader，你可以通过 LoaderOptionsPlugin 的配置项来提供这些功能  ???
      minimize: true
    })
  ])
}
