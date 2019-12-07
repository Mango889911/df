const express=require("express");
const pool=require("../pool.js");
const cookRouter=express.Router();
//查询最受欢迎的厨师
cookRouter.get("/hot",function(req,res){
  var sql=`select * from df_cooker where comment=(select max(comment) from df_cooker)`;
  pool.query(sql,function(err,result){
    if(err){
      throw err;
    }
    if(result.length>0){
      res.send(result);
    }
  })
})
// 根据厨师编号获取厨师的信息
cookRouter.get("/",function(req,res){
  var obj=req.query;
  pool.query(`select * from df_cooker where kid=?`,[obj.kid],function(err,result){
    if(err){
      throw err;
    }
    if(result.length>0){
      res.send(result[0]);
    }
  })
})
cookRouter.get("/revise",function(req,res){
  var obj=req.query;
  pool.query(`update df_cooker set comment=? where kid=?`,[obj.comment,obj.kid],function(err,result){
    if(err){
      throw err;
    }
    console.log(result)
  })
})
module.exports=cookRouter;
