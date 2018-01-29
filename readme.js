{
  "name": "vue-f-first",
  "description": "It's a vue ",
  "version": "0.0.5",
  "author": " <623003648@qq.com>",
  "main": "dist/vue-count-to.min.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot --content-base='./demo/'",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "license": "MIT",
  "homepage": "",
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-stage-2": "^6.13.0",
    "babel-runtime": "^6.11.6",
    "cross-env": "^3.0.0",      
    "css-loader": "^0.25.0",
    "file-loader": "^0.9.0",
    "vue-loader": "^11.1.4",
    "vue-template-compiler": "^2.2.1",
    "webpack": "^2.2.0",
    "webpack-dev-server": "^2.2.0",
    "babel-eslint": "7.1.1",
    "eslint": "3.14.1",
    "eslint-friendly-formatter": "2.0.7",
    "eslint-loader": "1.6.1",
    "eslint-plugin-html": "2.0.0",
    "eslint-config-airbnb-base": "11.0.1",
    "eslint-import-resolver-webpack": "0.8.1",
    "eslint-plugin-import": "2.2.0"
  }
}

// cross-env 指令跨平台 插件  很多指令(NODE_ENV=development 在window 平台下不执行)
// webpack-dev-server   
     //1. 是一个小型的 node.js 的Express 服务 ，它使用 webpack-dev-middleware 来服务于webpack
     //2. webpack-dev-service 启了服务之后，默认以当前目录为根目录，当然也可以自己设定它
     //3. webpack-dev-server --content-base build/(文件名) 来设置根目录(看上面dev 中的参数)
     //4. 通过 webpack-dev-service 启动的服务 并没有把文件 真实的打包出来，而是 存在缓存里面了(也就是内存中)，所以当我们 npm run dev 的时候在dist 中是按不到文件的
     //5. --hot 启动热跟新替换，实时跟新
     //6. 增加热跟新之后 在 webpack.config.js 中添加 devServer:{inline:true}
     //7. --open 帮助我们自动打开 浏览器
     // 更多内容请先参考 https://segmentfault.com/a/1190000006964335

// build 中 的参数解析
    // 1.webpack  直接打包同级目录下的 webpack.config.js 文件，如果需要加载 其他的文件 ？？
    // 2.--hide-modules  run build 的时候 隐藏modules


    