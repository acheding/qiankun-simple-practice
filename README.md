# qiankun简单实践

#### 介绍
基于 vue2 和 webpack 的 qiankun 微前端简单实践，并通过 store 实现了主应用向微应用通信。

#### 安装教程

1.  yarn add qiankun
2.  yarn install
3.  yarn dev

#### 使用说明

主应用：
1.  注册微应用(main.js)
2.  设置路由(router/index.js)
3.  显示导航菜单及定义容器(App.vue)
4.  定义 store (store/index.js)
5.  显示内容(views/main.vue)

微应用：
1.  修改端口号与注册微应用时对应(config/index.js)
2.  开启应用间的跨域访问(webpack.dev.conf.js)
3.  增加 output 配置(webpack.base.conf.js)
4.  定义 store ，同主应用
5.  导出相应的生命周期钩子(main.js)
6.  设置路由(router/index.js)
7.  显示内容(views/micro.js)
