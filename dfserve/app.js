const express=require('express');
const cors=require("cors");
const session=require("express-session")
const bodyParser=require("body-parser");
const userRouter=require("./routes/user.js");
const cookRouter=require("./routes/cook.js");
const foodRouter=require("./routes/food.js");
const bookRouter=require("./routes/book.js");
const commentRouter=require("./routes/comment.js");
const app=new express();
app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({origin:['http://localhost:8080','http://127.0.0.1:8080','http://localhost:8081'],credentials:true}))
app.use(session({
    secret:"128位安全字符串",
    resave:true,         //请求更新数据 
    saveUninitialized:true//保存初始数据
 }));
app.use(express.static("public"));
app.use('/user',userRouter);
app.use('/cook',cookRouter);
app.use('/food',foodRouter);
app.use('/book',bookRouter);
app.use('/comment',commentRouter);