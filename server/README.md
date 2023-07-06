# 开始
    安装脚手架
    npm install -g express-generator
    创建项目
    express express-server
    安装依赖
    npm install
    npm start

# 更改配置
    监听4000
    默认跳转静态文件包 
    app.use(express.static(__dirname+'/www'))

# 解决404
    npm i connect-history-api-fallback