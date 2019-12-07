const express=require('express');
const pool=require('../pool.js');
const bookRouter=express.Router();
//增加订单
bookRouter.get('/',function(req,res){
  var obj=req.query;
  if(req.session.tel){
      pool.query('insert into book(phone,bdate,pnumber) values (?,?,?)',[req.session.tel,obj.bdate,obj.pnumber],function(err,result){
        if(err){
            return
        }
        if(result.affectedRows>0){
            res.send({code:1,msg:'下单成功'})
        }else{
            res.send({code:-1,msg:'下单失败，'})
        }
        })
  }else{
      res.send({code:-1,msg:'未登录，请登录'})
  };

});
module.exports=bookRouter;
