<template>
  <div class="detail" v-if="fmsg!=={}">
    <h1 class="fontO">美食志愿</h1>
    <el-row class="desc">
      <el-col :span="12" class="img">
        <img :src="require(`../../public/${fmsg.pic}`)" class="apprImg">
      </el-col>
      <el-col :span="12">
        <div class="appr">
          <img :src="msgActive?require(`../../public/img/appr_active.png`):require(`../../public/img/appr.png`)" @click="appr" @mouseup="sendAppr">
          <span>{{fmsg.comment}}</span>
        </div>
        <div class="comment" v-if="commentlist">
          <img src="../../public/img/comment.png" @click="like" class="comImg">
          <div class="comZone">
            <textarea col="5" row="6" v-model="cContent"></textarea>
            <button class="public" @click="comment">发表评论</button><button class="cancel">取消评论</button>
          </div>
          <div v-for="(elem,i) of commentlist" :key="i">
            <span>{{elem.rphone}}</span>
            <span>{{elem.rtext}}</span>
            <span>{{elem.rdate}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default{
  data(){
    return {kid:0,
    cContent:'',
    clickCount:0,
    fmsg:{},
    msgActive:0,
    commentlist:[]
    }
  },
  methods:{
    comment(){
      var date=new Date().toLocaleString();
      var content=this.cContent;
      var fid=this.fmsg.fid;
      this.axios.get("/comment",{params:{
        date,content,fid
      }}).then(res=>{
        console.log(res)
        if(res.data.code==1){
          alert("评论成功")
        }else{
          alert("评论")
        }
      }).catch(err=>{
        console.log(err)
      })
    },
      like(e){
        var $target=$(e.target).next(".comZone");
        $target.toggleClass("active")
      },
      appr(){
         this.clickCount++;
        if(this.clickCount%2==0){
          this.msgActive=0;
          this.fmsg.comment--;
          return;
        }else{
          this.msgActive=1;
          this.fmsg.comment++;
        }
      },
      sendAppr(){
      var t1=setTimeout(()=>{
      this.axios.get("/food/revcomm",{params:{fid:this.fmsg.fid,comment:this.fmsg.comment}}).then(result=>{
        console.log(响应成功);
      }).catch(err=>{
        console.log(err)
      })
    },10000)
  
      }
  },
  created(){
    var fid=parseInt(location.hash.split("/")[2]);
    this.axios.get("/food/fid",{params:{fid}}).then((result)=>{
      this.fmsg=result.data;
    })
    this.axios.get("/comment/list",{params:{fid}}).then((result)=>{
      this.commentlist=result.data
      console.log(this.commentlist)
    }).catch(err=>{
      console.log(err)
    })
  }
  // mounted(){
  //   var arr=location.hash.split("/");
  //   this.kid=location.hash.split("/")[arr.length-1];
  //       this.axios.get("/cook",{params:{
  //       kid:this.kid}}).then((result)=>{
  //       this.apprCount=parseInt(result.data.comment);
  //     })
  // }
}
</script>
<style scoped>
.detail .comment>.comZone{
  display:none;
}
.detail .comment>.comZone.active{
  display:block;
}
</style>