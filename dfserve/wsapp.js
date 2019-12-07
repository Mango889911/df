const http=require('http');
const app=http.createServer();
const io=require("socket.io")(app);
app.listen(4000);
// app.use(cors({
//     origin:["http://localhost:8080"],credentials:true
// }));
var clientCount=0
io.on("connection",(socket)=>{
    socket.on("message",(data)=>{
        io.emit("enter","欢迎新人"+data);
        clientCount++;
    });
    socket.on("list",(data)=>{
        console.log(data);
        io.emit("enter",data)
    })
    io.on("disconnect",(socket)=>{
        socket.emit("leave","离开了")
    })
})
