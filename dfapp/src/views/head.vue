<template>
<<<<<<< HEAD
</template>
<script >

</script>
<style scoped>

=======
<el-container class="head">
    <el-header>
        <el-row class="fontW">
            <el-col :span="11">
                    <ul class="links">
                        <li><router-link to="#"><img src="../../public/img/facebook.png"></router-link></li>
                        <li><router-link to="#"><img src="../../public/img/google.png"></router-link></li>
                        <li><router-link to="#"><img src="../../public/img/twitter.png"></router-link></li>
                        <li><router-link to="#"><img src="../../public/img/in.png"></router-link></li>
                    </ul>
            </el-col>
            <el-col :span="4"><router-link to="#">info@example.com</router-link></el-col>
            <el-col :span="4"><router-link to="#">+1 (100)222-23-33</router-link></el-col>
            <el-col :span="1"><img src="../../public/img/search.png" @click="search"></el-col>
            <el-col :span="1">
                <div class="search">
                    <input class="srcInput fontW" placeholder="请输入菜名..." style="background-color:transparent;height:22px" v-model="finput">
                    <button class="srcBtn fontW" style=background-color:#fd6239;border-color:#fd6239;height:27px;margin-left:2px; @click="sfood">SEND</button>
                </div>
            </el-col>
            <el-col :span="1">
                <router-link to="login">登录</router-link>
            </el-col>
            <el-col :span="1">
                <router-link to="regist">注册</router-link>
            </el-col>
        </el-row>
    </el-header>
    <ul class="nav fontW" @click="skip" @mouseover="revStyle">
        <li class="nav-item fontG" data-label="0">主页</li>
        <li class="nav-item" data-label="1">食品介绍</li>
        <li class="nav-item" data-label="2">服务</li>
        <li class="nav-item fontSizeB" data-label="3" style="color:#fd6239;">食之味</li>
        <li class="nav-item" data-label="4">{{isLogin?uname:'登录'}}</li>
        <li class="nav-item" data-label="5">注册</li>
        <li class="nav-item" data-label="6">联系我们</li>
    </ul>
</el-container>
</template>
<script >
export default{
    data:function(){
        return {finput:'',
        fid:0,
        isLogin:false,
        uname:''
        }
    },
    methods:{
        sfood(){
            var reg=/^\s*[\u4e00-\u9fa5\w]+\s*$/g;
            if(reg.test(this.finput)){
                this.finput=jQuery.trim(this.finput);
                this.axios.get("/food/fname",{params:{title:this.finput}}).then((result)=>{
                    var fid=parseInt(result.data.fid);
                    this.fid=fid;
                    if(result.data!=0){
                        this.$router.push(`/page/${fid}`);
                        this.finput='';
                        history.go(0);
                    }else{
                        alert("没有此食物")
                    }
                })
            }
        },
        search(e){ 
        var $target=$(e.target);
        var $srcInput=$($(e.target).parent().next().children()[0]);
            $srcInput.toggleClass("active")
        },
        skip(e){
            if(e.target.nodeName=="LI"){
                var targetItem=$(e.target);
                var label=parseInt(targetItem.attr("data-label"));
                try{
                    switch(label){
                        case 0:
                            if(location.hash=="#/home"){
                                return;
                            }else{
                                this.$router.push("/home");
                            }
                            break;
                        case 1:
                            this.fid=this.fid==0?1:this.fid;
                            if(location.hash==`#/page/${this.fid}`){
                                return;
                            }else{
                                this.$router.push(`/page/${this.fid}`);
                            }
                            break;
                        case 2:
                            if(location.hash=="#/service"){
                                return;
                            }else{
                                this.$router.push("/service");
                            }
                            break;
                        case 3:
                            if(location.hash=="#/"){
                                return;
                            }else{
                                this.$router.push("/home");
                            }
                            break;
                        case 4:
                            if(location.hash=="#/login"){
                                return;
                            }else{
                                this.$router.push("/login");
                            }
                            break;
    
                        case 5:
                            if(location.hash=="#/regist"){
                                return;
                            }else{
                                this.$router.push("/regist");
                            }
                            break;
                        case 6:
                            if(location.hash=="#/contact"){
                                return;
                            }else{
                                this.$router.push("/contact");
                            }
                            break;
                
                    }
                }catch(msg){
                    throw msg;
                }
            }    
        },
        revStyle(e){
            if(e.target.nodeName=="LI"){
                var targetItem=$(e.target);
                if(targetItem.is("active")==false){
                    targetItem.addClass("active");
                    targetItem.siblings("li").removeClass("active");
                    targetItem.attr("animation","nav 5s linear");
                }
            }
        }
    },
    watch:{
        canLogin(){
            console.log("发生变化")
        }
    },
    created(){
        var t1=setInterval(() => {
            // if(sessionStorage.length>0){
            //     this.uname=sessionStorage.getItem("uname");
            //     this.isLogin=true;
            //     clearInterval(t1)
            // }
            if(this.bus.uname!==''){
                this.uname=this.bus.uname;
                this.isLogin=true;
                clearInterval(t1)
            }
        }, 200);
    }
}

</script>
<style scoped>
    @keyframes nav {
    0%{
        background-color:red;
        width:20px;
        top:10px;
    }
    50%{
        background-color:green;
        width:50px;
        top:50px;
    }
    100%{
        background-color:blue;
        top:100px;
    }
    }
.el-container>.el-row>.el-col-1>.search{
        width:100px;
        height:100px;
        position:absolute;
        animation:search 5s linear;
    }
.el-container{
    background: url("../../public/img/banner.jpg");
    color:white;
    position:relative;
    height:140px;
}
/* 搜索样式 */
.el-header{
    width:100%;
}
.el-header>.el-row{
    width:100%;
}
.el-header>.el-row>.el-col-11>ul.links{
    width:45%;
    display:flex;
    list-style-type: none;
    padding-left:0;
    text-align:center;
    margin-top:0px;
}
.el-header>.el-row>.el-col{
    height:30px;
    margin:16px auto;
}
.el-header>.el-row>.el-col-11>ul.links>li{
    width:30px;
    height:30px;
    border:0 solid white;
    border-radius:50%;
}
.el-header>.el-row>.el-col-11>ul.links>li~li{
margin-left:5%;
}
.el-header>.el-row .el-col-5 a{
color:white;
line-height:30px;
text-decoration: none;
font-size:14px;
}
.el-header>.el-row>.el-col-2 img{
width:23%;
margin:5px auto;
}
.el-header>.el-row>.el-col-1>.search{
transition:all 3s linear;
position: absolute;;
height:40px;
right:6%;
top:100px;
transform:scale(1.5,1.1)
}
.el-header>.el-row>.el-col-1>.search.active{
display:none;
}
/* style=position:absolute;top:100px;right:2px;animation-name:search;animation-duration:5s; */
/*导航*/
.el-container>.nav{
display:inline-flex;
flex-flow:row wrap;
justify-content:space-around;
margin-top:10px;
}
.el-container .nav-item{
    color:white;
    font-size:15px;
    position: relative;
    overflow: hidden;
}
.el-container .nav-item.active{
    color:#26d797;
    font-size:15px;
}
.el-container .nav-item .navSvg{
    position: absolute;
    top: 0;
    left: 0;
}
.el-container .nav-item line {
    stroke-width: 10;
    stroke: #000;
    fill: none;
    stroke-dasharray: 200;
    -webkit-transition: -webkit-transform .6s ease-out;
    transition: transform .6s ease-out;
}
.el-container .nav-item:hover svg line {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
div:hover svg line.top {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

div:hover svg line.bottom {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

div:hover svg line.left {
  -webkit-transform: translateY(100%);
  transform: translateY(400px);
}

div:hover svg line.right {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.el-container>.index-date>.date-list{
    width:100%;
}
>>>>>>> update df
</style>