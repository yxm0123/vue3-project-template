# vue3-project-template

### 安装依赖
```
yarn
```

### Compiles and hot-reloads for development 
```
yarn serve 启动项目
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### 目录结构
<pre>
├── public                    // 静态资源，一般把不需要处理的文件可以放这里
├── src                       // 生产目录
│   ├── api                   // ajax
│   ├── assets                // 一些资源文件
│   ├── components            // 各种内部基础组件
│   ├── i18n                  // 中英文翻译配置文件
│   ├── router                // 路由配置及map
│   ├── store                 // Vuex 状态管理器
│   ├── views                 // 各种页面
│   ├── App.vue               // 根组件
│   ├── main.js               // Webpack 编译入口文件，入口js
├── .browserslistrc           // browserslistrc 配置文件
├── .eslintrc.js              // eslint配置文件
├── .gitignore                // 用于Git配置不需要加入版本管理的文件
├── babel.config.js           // babel配置文件
├── package.json              // 项目配置文件
├── tsconfig.json             // tsconfig配置文件
├── vue.config.js             // vue配置文件
├── yarn.lock                 // 锁定安装依赖版本
</pre>

### 开发规范
<h3 id="css">1. css规范</h3>
1.组件内部样式放在style里边，根据选择scoped和css module，推荐使用
2.全局样式放入src/assets下边
3.全局css样式名加hash，混合加hash，避免样式覆盖

<h3 id="api">2. api规范</h3>
1.api(views模块下面汇总在一起)

<h3 id="i18n">3. i18n规范</h3>
1.两种命名规范（components、views）
2.views下面对应视图模块

<h3 id="i18n">4. views下名称规范</h3>
1.以cer-xxx命名模块

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
