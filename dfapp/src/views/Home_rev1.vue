<template>
  <el-main class="home-main">
    <banner></banner>
     <div class="intr">
        <h3 class="title"><span>关于</span><span>我们</span></h3>
        <div class="content">
         <span>我们寄托在美食上的不仅仅是味蕾的享受，有时候更多的反而是味道带来的记忆。</span>
                 <span>而美食本身，也携带着最质朴最强大的治愈效果</span>
            不论是身处异乡孤独流浪的游子，还是被紧张急促生活节奏追赶的白领，亦或是因为恋情受挫内心苦痛的小女生，好像只需要一份热腾腾的美食，瞬间就带来了寒风冷雨中一股窝心的暖流。
        </div>
        <div class="link">
          <router-link to="/service">特色服务</router-link>
        </div>
    </div>
    <el-row class="about fontF lineH" v-if="hotcook">
      <el-col :span="12" class="pContent">
          <el-row>
            <el-col :span="24" class="fontB bgB ">
              <div class="content fontW fontSizeS">
                {{hotcook.kintr}}
              </div>
              <div class="link">
              <router-link to="#" class="fontO" @click.native="skipabout">了解详情</router-link>
              </div>
            </el-col>
            <el-col :span="12" class="bgG">
              <h3 class="fontB fontSizeM">Handling your needs with care</h3>
              <div class="fontW fontSizeS">
                Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit. a galley of type and scrambled it to make a type specimen book. Proin ultricies vestibulum velit.
              </div>
            </el-col>
            <el-col :span="12" class="bgO">
              <h3 class="fontB fontSizeM">Best recipes with best ingredients</h3>
              <div class="fontW fontSizeS">
                 
              </div>
            </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="pIntr">
          <img src="../../public/img/ab.jpg">
      </el-col>
    </el-row>
     <el-row class="hot lineH" v-if="food">
      <el-col :span="24" class="title fontSizeB">热门推荐</el-col>
      <el-col :span="24" class="p1" v-for="(elem,i) of food" :key="i">
          <el-col :span="12" class="p1Img">
            <img :src="require(`../../public/${elem.pic}`)">
          </el-col>
          <el-col :span="12" class="pdel">
            <h1 class="pTitle">{{elem.title}}</h1>
            <div class="pContent alginL">
              {{elem.details}}
            </div>
            <button class="pBtn bgO fontSizeS fontW" @click="skipabout(elem)">了解详情</button>
          </el-col>
      </el-col>
    </el-row>
    <div class="usedInfo">
      <div class="userContent"></div>
    </div>
    <el-row class="desc">
      <el-col :span="12" class="declare bgB fontW">
        <h1>ALWAYS FRESH & DELICIOUS FOOD</h1>
        <div class="decContent"> 
          <span>我们寄托在美食上的不仅仅是味蕾的享受，有时候更多的反而是味道带来的记忆。</span>
          <span>而美食本身，也携带着最质朴最强大的治愈效果</span>
            不论是身处异乡孤独流浪的游子，还是被紧张急促生活节奏追赶的白领，亦或是因为恋情受挫内心苦痛的小女生，好像只需要一份热腾腾的美食，瞬间就带来了寒风冷雨中一股窝心的暖流。</div>
      </el-col>
      <el-col :span="12" class="relate">
        <el-row @mouseover.native="display" @mouseout.native="hide">
          <el-col :span="12">
            <div class="relImg"><img src="../../public/img/s1.jpg"></div>
            <div class="relInfo">
              <h2 class="title"><span class="fontO">D</span><span class="fontW">elish</span><span class="fontO">F</span><span class="fontW">ood</span></h2>
              <span class="content fontW">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="relImg"><img src="../../public/img/s2.jpg"></div>
            <div class="relInfo">
              <h2 class="title"><span class="fontO">D</span><span class="fontW">elish</span><span class="fontO">F</span><span class="fontW">ood</span></h2>
              <span class="content fontW">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="relImg"><img src="../../public/img/s3.jpg"></div>
            <div class="relInfo">
              <h2 class="title"><span class="fontO">D</span><span class="fontW">elish</span><span class="fontO">F</span><span class="fontW">ood</span></h2>
              <span class="content fontW">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="relImg"><img src="../../public/img/s4.jpg"></div>
            <div class="relInfo">
              <h2 class="title"><span class="fontO">D</span><span class="fontW">elish</span><span class="fontO">F</span><span class="fontW">ood</span></h2>
              <span class="content fontW">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="contact">
      <h2><span class="fontO">CONTACT</span><span class="fontB">INFO</span></h2>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <ul class="ranklistbyM" v-if="foodhot">
      <span class="fontSizeM fontO">月排行榜</span>
      <li v-for="(elem,i) of foodhot" :key="i" class="fontSizeS fontF fontO" @click="skipabout(elem)">{{i+1}}.{{elem.title}}</li>
    </ul>
  </el-main>
</template>
<script>
import banner from "./banner"
export default {
  components: {banner
  },
  data(){
    return {hotcook:{},
    imgServeUrl:'',
    food:[],
    foodhot:[]
  }
  },
  methods:{
    display(e){
      if(e.target.nodeName=="IMG"){
        var $display=$(e.target).parent(".relImg").next(".relInfo");
        $display.toggleClass("active");
        if($display.is("active")==false){
          $display.attr("display","none");
        }
      }
    }
    ,hide(e){
      e.preventDefault();
        if(e.target.nodeName=="IMG"){
        var $hide=$(e.target).parent(".relImg").next(".relInfo");
        $hide.removeClass("active");
        $hide.attr("display","none");
      }
    },
    skipabout(elem){
      console.log(elem.fid)
      this.$router.push(`/page/${elem.fid}`);
    }
  },
  created(){
    this.axios.get("/cook/hot").then((result)=>{
      this.hotcook=result.data[0];
      var family=result.data[0].k_family;
      this.axios.get("/food/intr",{params:{family}}).then((result)=>{
        this.food=result.data;
      })
    // this.$store.commit("revHot",this.hotcook);
    // console.log(`获取回来的数据`+this.$store.getters.getState.kid); 
  })
      this.axios.get("/food/rankbym").then((result)=>{
        var foodlist=result.data;
        for(var i=0;i<foodlist.length;i++){
          if(i<5){
            this.foodhot[this.foodhot.length]=foodlist[i]

          }else{
            break;
          }
        }
      })

}
}
</script>
<style scoped>
.el-main{
  padding:0;
  margin:0;
  position: relative;
}
.el-main>.intr{
  width:80%;
  margin:0 auto;
}
.el-main>.intr>.content{
font:16px;
line-height:45px;
}
.el-main>.intr>.link a{
background-color:#fd6239;
padding:5px 10px;
color:#fff;
text-decoration:none;
}
/* 关于我们 */
.el-main>.about{
width:100%;
height:570px;
margin-top:20px;
overflow: hidden;
}
.el-main>.about>.pIntr>img{
width:100%;
height:100%;
}
.el-main>.about>.pContent .el-col-24,.el-main>.about>.pContent .el-col-12{
height:285px;
overflow:hidden;
}
/* 热门推荐 */
.el-main>.hot{
  width:100%;
  margin-top:20px;
}
.el-main>.hot .pContent{
  width:70%;
}
.el-main>.hot .p1 .pContent{
  margin-right:5%;
}
.el-main>.hot .p2 .pContent{
  margin-left:5%;
}
.el-main>.hot img{
  width:70%;
}
/* 总用户动态 */
.el-main>.usedInfo{
  width:100%;
  height:475px;
  background:url("../../public/img/bl2.jpg") no-repeat;
  background-size:cover;
  position:relative;
}
.el-main>.usedInfo>.userContent{
  position: absolute;
  width:80%;
  height:60%;
  top:20%;
  left:10%;
  z-index:5;
  background:rgba(0,0,0,0.38);
}
/* 关于食材声明 */
.el-main>.desc{
  height:463px;
}
.el-main>.desc>.declare{
  height:100%;
}
.el-main>.desc>.declare>.decContent{
  width:70%;
  margin:10px auto;
}
/* 动态显示食品详情 */
.el-main>.desc>.relate{
  height:100%;
}
.el-main>.desc>.relate .el-col-12{
  position:relative;
  height:228px;
}
.el-main>.desc>.relate .el-col>.relImg>img{
  width:100%;
}
.el-main>.desc>.relate .el-col>.relInfo{
  width:100%;
  height:0;
  position:absolute;
  top:100%;
  left:0;
  transition:all 2s linear;
  background-color:rgba(8,8,8,0.3);
  overflow:hidden;
}
.el-main>.desc>.relate .el-col>.relInfo.active{
  height:50%;
  border-top:3px solid #fd6239;
  top:49%;
  left:0;
}
/* 热门食品排行榜 */
.el-main>.ranklistbyM{
position:fixed;
top:50%;
left:2px;
text-align:left;
width:20%;
border-radius: 2%;
}

</style>
