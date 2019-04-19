# webSocket
简易即时通讯  
## 运用技术
### node框架express
搭建简单本地服务，加载入口文档public/first.html  
### socket.io
#### 简介
Socket.io是一个WebSocket库，包括了客户端的js和服务器端的nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用。它会自动根据浏览器从WebSocket、AJAX长轮询、Iframe流等等各种方式中选择最佳的方式来实现网络实时应用  
#### socket.io特点
实时分析：将数据推送到客户端，这些客户端会被表示为实时计数器，图表或日志客户。  
实时通信和聊天：只需几行代码便可写成一个Socket.IO的”Hello,World”聊天应用。  
二进制流传输：从1.0版本开始，Socket.IO支持任何形式的二进制文件传输，例如：图片，视频，音频等。  
文档合并：允许多个用户同时编辑一个文档，并且能够看到每个用户做出的修改
可发送图片和文字消息。  
#### 兼容性
![截图](/public/images/a.svg)  
### html5 canvas
主要对图片文件进行压缩、base64转码处理  
## 开始
下载所需模块  
cnpm init    
cnpm install --save express socket.io   
## 启动服务  
node index.js(supervisor index.js)  
访问地址:http://localhost:3000/  
