const express=require('express');
const pool=require('../pool.js');
const commentRouter=express.Router();
//增加订单
commentRouter.get('/',function(req,res){
  var obj=req.query;
  if(req.session.tel){
      pool.query('insert into comment(rphone,rdate,fid,rtext) values (?,?,?,?)',[req.session.tel,obj.date,obj.fid,obj.content],function(err,result){
        if(err){
            return
        }
        if(result.affectedRows>0){
            res.send({code:1,msg:'评论成功'})
        }else{
            res.send({code:-1,msg:'评论失败'})
        }
        })
  }else{
      res.send({code:-1,msg:'未登录，请登录'})
  };

});
commentRouter.get('/list',function(req,res){
    var obj=req.query;
        pool.query('select * from comment where fid=?',[obj.fid],function(err,result){
          if(err){
              return
          }
          if(result.length>0){
              res.send(result)
          }else{
              res.send({code:-1,msg:'暂无评论'})
          }
        })
  });
module.exports=commentRouter;
