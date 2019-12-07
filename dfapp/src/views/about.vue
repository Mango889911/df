<template>
  <div class="item-grid">
    <div class="item">
        <div class="item-image">
          <img src="../../public/img/s1.jpg" alt="">
        </div>
        <div class="item-text">
          <div class="item-text-wrappe">
            <h2 class="item-text-title">food</h2>
            <P class="item-text-dek">Steak staple food</P>
          </div>
        </div>
    </div>
    <div class="item">
        <div class="item-image">
          <img src="../../public/img/s2.jpg" alt="">
        </div>
        <div class="item-text">
          <div class="item-text-wrappe">
            <h2 class="item-text-title">food</h2>
            <P class="item-text-dek"> Steak staple food</P>
          </div>
        </div>
    </div>
    <div class="text_msg">
      <h3>A BRIEF HISTORY OF ABOUT US</h3>
      <span>Morbi scelerisque a dolor vel feugiat. Nunc volutpat, magna in interdum commodo, magna orci venenatis risus, eu congue dolor ante quis eros</span>
    </div>  
     <div class="hbb">
       <img src="../../public/img/ba1.jpg" alt="">
     </div>
        <h3>OUR CHEFS</h3>
      <div class="container">
        <div>
          <img src="../../public/img/t1.jpg" alt="">
        </div>
        <div>
          <img src="../../public/img/t2.jpg" alt="">
        </div>
        <div>
          <img src="../../public/img/t3.jpg" alt="">
        </div>
        <div>
          <img src="../../public/img/t4.jpg" alt="">
        </div>
     </div>
  </div>
</template>
<style scoped>
  body{
  font-family:"Montserrat",sans-serif;
  background-color: #8e8194; 
}
.item-grid{
  max-width:1800px;
  margin:100px auto;
  position:relative;
  box-shadow: 0 5px  10px 0 rgba(0, 0, 0,0.3);
}
.item{
  position:relative;
  float: left;
  width:33.3333%;
  background-color:#000;
  overflow: hidden;
  margin-left: 20px; 
}
.item:after{
  content: "";
  display: block;
  background-color: inherit;
  opacity: 0.9;
  width:100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  transform: scale(2) translateX(-75%) translateY(-75%) 
  translateZ(0) rotate(-28deg);
  transition:transform 3s cubic-bezier(0.23,1,0.32,1)
}
.item:hover:after{
  transform: scale(2) translateX(0%) translateY(0%) 
  translateZ(0) rotate(-28deg);
}
.item:hover .item-image{
 transform:scale(1.2) translateZ(0); 
}
.item:hover .item-text{
  opacity:1;
  transform:translateY(0); 
}
.item-image{
  height:auto;
  backface-visibility: hidden;
  transform:translateZ(0);
  transition:transform 750ms cubic-bezier(0.23,1,0.32,1);   
}
.item-image::before{
  content: "";
  display:block;
  padding-top:75%;
  overflow: hidden; 
}
.item-image img{
  position: absolute;
  top:0;
  left:0; 
  width: 100%;
  height:100%;
  line-height:0; 
}
.item-text{
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  opacity:0;
  text-align: center;
  z-index:1 ;
  color:pink; 
  transition:opacity 500ms cubic-bezier(0.23,1,0.32,1);
  transition-delay: 300ms;
  transform:translateY(-20%);
}
.item-text-wrappe{
  width:100%;
  position:absolute;
  top:50%;
  transform: translateY(-50%); 
}
.item-text-title{
  font-size:36px;
  padding:0 15px;
  margin: 5px 0 0 0;  
}
.item-text-dek{
  font-size:16px;
  opacity:0.7;
  margin:0; 
}
.text_msg{
 width:366px;
 height: 332px;
 background:#fff;  
 overflow: hidden;
 margin-left:20px; 
 position:relative; 
 float: left;
}
.text_msg span{
  text-align: center;
  font-size:16px;
}
  .text_msg  .hbb{
   width:100%;
   height:100%;
 }
 .hbb img{
   margin-top:18px;  
 }
 .container{
   width:100%;
   display: flex; 
  justify-content: space-around
 }
</style>


