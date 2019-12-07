<template>
    <div id="banner">
        <h2 class="bigTitle fontW">FABULOUS FOOD AT AFFORDABLE PRICES!</h2>
        <div class="date-form">
            <p class="date-title">RESERVE A TABLE.</p>
            <div class="date-item">
                <label>时间</label>
                <el-row class="time">
                    <input type="time" class="fontW" v-model="time">
                </el-row>
            </div>
            <div class="date-item">
                <label>日期</label>
                <el-row class="date">
                    <input type="date" v-model="date">
                </el-row>
            </div>
            <div class="date-item">
                <label>用餐人数</label>
                <el-row class="num">
                    <select name="" id="booknum" v-model="num" class="fontW" style="background-color:">
                        <option value="1">1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                        <option value="more">more Person</option>
                    </select>
                </el-row>
            </div>
            <div class="date-btn">
                <label></label>
                <button @click="book">预约</button>
            </div>
        </div>
        <div id="carousel">
            <ul class="carousel-main">
                <li class="carousel-item" data-roll="carousel"  data-label="0"><a href="javascript:;"><img src="../../public/img/p1.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="1"><a href="javascript:;"><img src="../../public/img/p2.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="2"><a href="javascript:;"><img src="../../public/img/p3.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="3"><a href="javascript:;"><img src="../../public/img/p4.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="4"><a href="javascript:;"><img src="../../public/img/p1.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="5"><a href="javascript:;"><img src="../../public/img/p2.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="6"><a href="javascript:;"><img src="../../public/img/p3.jpg" alt=""></a></li>
                <li class="carousel-item" data-roll="carousel" data-label="7"><a href="javascript:;"><img src="../../public/img/p4.jpg" alt=""></a></li>
            </ul>
            <ul class="carousel-index">
            <li data-label="0" class="active" data-target='carousel-index'><a href="javascript:;"></a></li>
            <li data-label="1"><a href="javascript:;"></a></li>
            <li data-label="2"><a href="javascript:;"></a></li>
            <li data-label="3"><a href="javascript:;"></a></li>
            </ul>
            <div class="btn-left"><img src="../../public/img/back.png" alt=""></div>
            <div class="btn-right"><img src="../../public/img/next.png" alt=""></div>
        </div>
    </div>
</template>
<script>
import {carousel} from '../assets/API/carousel'
export default {
    data(){
        return {
            date:'',
            num:0,
            time:''
        }
    },
    methods:{
        book(){
            if(this.date&&this.time&&this.num){
                this.axios.get("/book",{params:{
                    bdate:this.date+' '+this.time,
                    pnumber:this.num
                }}).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }else{
                alert("订单信息不能为空")
                return 
            }
        }
    },
    created(){
        carousel();
    } ,
    mounted(){
        
    }
}
</script>
<style scoped>
/* 时间样式 */
#banner{
    background: url("../../public/img/banner.jpg") no-repeat 0 -140px;
    height:450px;
    margin-bottom:10%;
    position:relative;
}
#banner>.date-form{
    color:#fff;
    width:100%;
    height:170px;
    margin:10px auto 10px;
    display:flex;
    flex-flow:row wrap;
    justify-content: space-between;
    background-color:rgba(12,12,12,0.48);
}
#banner>.bigTitle{
    font-size:35px;
}
#banner>.date-form>.date-title{
    width:100%;
    margin:10px auto 20px;
    font-size:24px;
}
#banner>.date-form>div{
    width:20%;
    margin:10px auto 10px;
    padding:10px 5px;
}
#banner>.date-form>.date-item .el-row{
    width:100%;
    height:37.6px;
    background-color:transparent !important;
    color:white;
    border:1.5px solid white;
    padding:0 0 0 5%;
}
#banner>.date-form>.date-item .el-row.date>input,#banner>.date-form>.date-item .el-row.time>input{
    background-color:transparent;
    border-color:transparent;
    color:white;
    margin-top:5px;
    width:90%;
    padding-left:1%;
}
#booknum{
width:100%;
margin-top:8px;
background-color:transparent;
border-color:transparent;
}
#booknum>option{
background-color:rgba(12,12,12,0.1);
color:red;
}
#banner>.date-form>.date-item label{
    display:block;
    height:21px;
}
#banner>.date-form>.date-btn{
    width:20%;
}
#banner>.date-form>.date-btn button{
    width:100%;
    height:37.6px;
    background-color:#fd6239;
    border-width:0;
    color:white;
    margin-top:21px;
}
/* 轮播图的样式 */
#carousel{
      width:80%;
      height:230px;
      position: absolute;
      padding:0;
      top:75%;
      margin:0 10%;
      overflow:hidden;
    }
 ul>li{
    list-style: none;
  }
  #carousel>.carousel-main{
    display:flex;
    width:100%;
    padding-left:0px !important;
    margin:0 auto;
    transition:all 1s linear;
  }
  #carousel>.carousel-main>.carousel-item{
    width:25%;
    flex-shrink:0;
  }
  #carousel>.carousel-main img{
    width:100%;
  }
  #carousel>.carousel-index{
    display:flex;
    position:absolute;
    bottom:15%;
    left:46%;
    z-index:200px;
  }
  #carousel>.carousel-index>li{
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background-color:white;
  }
  #carousel>.carousel-index>.active{
    background-color: darkblue;
  }
  #carousel>.btn-left{
    position:absolute;
    bottom:-2%;
    left:38%;
  }
  #carousel>.btn-right{
    position:absolute;
    bottom:-2%;
    right:38%;
  }
</style>