<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script scoped>
  
export default {
data:function(){
  return {}
=======
  <myhead v-if="path!=='/login'"></myhead>
  <router-view></router-view>
  <myfoot></myfoot>
  <div class="arr" :data-display="active">
	  <img src="../public/img/arr.png" class="backtop" >
  </div>
  </div>
</template>
<script scoped>
  import {carousel} from './assets/API/carousel'
  import myhead from "./views/head";
  import myfoot from "./views/foot";
export default {
data:function(){
	return {active:'',
	hotcook:{},
	path:''
}
},
components:{myhead,myfoot},
created(){
	$(window).on("scroll",(e)=>{
		var top=$(window).scrollTop();
		if(top>120){
			this.active="active";	
		}else{
			this.active="";
		}
	});
},
watch:{
	$route(){
		this.path=this.$route.path
	}
},
mounted(){
	carousel();

>>>>>>> update df
}
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

<<<<<<< HEAD
#nav {
  padding: 30px;
}
  a {
    font-weight: bold;
    color: #2c3e50;
  }
    .router-link-exact-active {
      color: #42b983;
    }
=======
*{
	margin:0;
}
html, body{
	margin:0;
	font-size: 100%;
	font-family: 'Lato', sans-serif;
	background: #fff;
	padding: 0;
}
body a {
	text-decoration:none;
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
	color:#fff;
}
a:hover{
 text-decoration:none;
}
input[type="button"],input[type="submit"]{
	transition:0.5s all;
	-webkit-transition:0.5s all;
	-moz-transition:0.5s all;
	-o-transition:0.5s all;
	-ms-transition:0.5s all;
}

h1,h2,h3,h4,h5,h6{
	margin:0;
	font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}	
p{
	margin:0;
}
ul{
	margin:0;
	padding:0;
	list-style: none;
}
.fontG{
	color:#26d797;
}
.fontW{
	color:#fff;
}
.fontO{
	color:#fd6239;
}
.fontB{
	color:#000;
}
.bgG{
	background-color:#26d797;
}
.bgW{
	background-color:#fff;
}
.bgO{
	background-color:#fd6239;
}
.bgB{
	background-color:#000;
}
.arr{
	width:10%;
	height:50px;
	position:fixed;
	bottom:2%;
	right:1%;
	display:none;
}
.arr>.backtop{
	width:40%;
}
.arr[data-display=active]{
	display:block;
}
.fontSizeM{
	font-size:21px;
}
.fontSizeS{
	font-size:16px;
}
.fontSizeB{
	font-size:26px;
}
.fontF{
	font-family:'Montserrat', sans-serif;
}
.lineH{
	line-height: 2.2rem;
}
.alignL{
	text-align:left;
}
.alignR{
	text-align:right;
}
>>>>>>> update df
</style>