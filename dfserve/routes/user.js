const express=require('express');
const pool=require('../pool.js');
const userRouter=express.Router();
// const sesson=require()
//注册端口
userRouter.get('/login',function(req,res){
  var obj=req.query;
pool.query('select * from user where tel=? AND upwd=?',[obj.tel,obj.upwd],function(err,result){
  if(err){
    return
  }
  if(result.length>0){
    req.session.uid=result[0].uid
    req.session.tel=result[0].tel
    console.log(req.session)
    res.send(result)
  }else{
    res.send("0")
  }
})
});
module.exports=userRouter;
