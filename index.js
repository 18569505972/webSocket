const express=require('express');
const app=express();
const server = require('http').Server(app);  
const io = require('socket.io')(server); 
app.use(express.static('./public')); 
app.set('view engine', 'html'); 
app.set('views', __dirname + '/public');
app.get('/', function(req, res, next) {
    res.sendfile("./public/first.html"); 
});
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
server.listen(3000, () => {  
    console.log('server running at 127.0.0.1:3000');  
});
let user1 = io.of('/user1');  
let user2 = io.of('/user2');   
user1.on('connection', (socket) => {  
 	socket.on('sendMessage', (data) => {  
        data.id = socket.id;  
        data.name='user1';
        data.time=new Date().Format("yyyy-MM-dd hh:mm");
        user2.emit('receiveMessage', data);  
    })  
    socket.on('sendImg', (data) => {  
        data.id = socket.id;  
        console.log(data)
        data.name='user1';
        data.time=new Date().Format("yyyy-MM-dd hh:mm");
        user2.emit('receiveImage', data);  
    })
}); 
user2.on('connection', (socket) => {  
 	socket.on('sendMessage', (data) => {  
        data.id = socket.id;  
        data.name='user2';
        data.time=new Date().Format("yyyy-MM-dd hhs:mm");
        user1.emit('receiveMessage', data);  
    })  
    socket.on('sendImg', (data) => {  
        data.id = socket.id;  
        data.name='user2';
        data.time=new Date().Format("yyyy-MM-dd hh:mm");
        console.log(data)
        user1.emit('receiveImage', data);  
    })
});   