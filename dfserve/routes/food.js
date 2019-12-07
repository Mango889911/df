const express=require("express");
const pool=require("../pool.js");
const foodRouter=express.Router();
//菜品介绍
foodRouter.get("/intr",function(req,res){
  var obj=req.query;
  // var sql=`select * from df_food where family=?`;
  pool.query('select * from df_food where family=?',[obj.family],function(err,result){
    if(err){
      throw err;
    }
    if(result.length){
      res.send(result);
    }
  })
})
// 根据食品名称搜索食品信息
foodRouter.get("/fname",function(req,res){
  var obj=req.query;
  pool.query('select * from df_food where title=?',[obj.title],function(err,result){
    if(err){
      throw err;
    }
    if(result.length>0){
      res.send(result[0])
    }else{
      res.send("0")
    }
  })
})
// 根据食品id搜索食品信息
foodRouter.get("/fid",function(req,res){
  var obj=req.query;
  pool.query('select * from df_food where fid=?',[obj.fid],function(err,result){
    if(err){
      throw err;
    }
    if(result.length>0){
      res.send(result[0])
    }else{
      res.send("0")
    }
  })
})
foodRouter.get("/revcomm",function(req,res){
  var obj=req.query;
  pool.query('update df_food set comment=? where fid=?',[obj.comment,obj.fid],function(err,result){
    if(err){
      throw err;
    }
    if(result.affectedRows!=0){
      res.send("1");
    }else{
      res.send("0");
    }
  })
})
foodRouter.get("/rankbym",function(req,res){
  pool.query('SELECT * FROM df_food ORDER BY comment DESC',function(err,result){
    if(err){
      throw err;
    }
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})
module.exports=foodRouter;
