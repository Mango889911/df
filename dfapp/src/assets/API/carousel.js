function carousel(){
  var currentLabel=0;
  var width;//移动的宽度
  var left=0;//ul默认的宽度
  var t1;//计时器
  var length=$("#carousel>.carousel-main").children(".carousel-item").length;
  var $index=$("#carousel>.carousel-index");
  var $main=$("#carousel>.carousel-main");
  var $btnLeft=$("#carousel>.btn-left");
  var $btnRight=$("#carousel>.btn-right"); 
  var main=document.querySelector("#carousel>.carousel-main");
  var i=0;
  function moveTo(to){
    try{
      width=parseInt(getComputedStyle($main[0]).width.split("px")[0])/4;
    }catch(msg){
    }
    if(to==undefined){
      if(currentLabel<length-1){
        to=currentLabel%4+1;
      }else{
        to=0;
      }
    }
    if(to%4>currentLabel%4){
      left-=(to%4-currentLabel%4)*width;
    }else if(to==currentLabel%4){
      return;
    }else{
      left+=(currentLabel%4-to%4)*width;
    }
    currentLabel=to;
    $main.css("margin-left",`${left}px`);
    $($index.children()[to%4]).addClass("active").siblings().removeClass("active");
  }
  function move(dir){  
    if(dir==1){
      if(i<length-1){
        i++;
      }else{
        i=0;
      }
    }
    if(dir==-1){
      if(i>0){
        i--;
      }else{
        i=length-1;
      }
    }
    moveTo(i);
  }
  $index.click(function(e){
    var i;
    if(e.target.nodeName=="LI"){
      var $target=$(e.target);
      $target.addClass("active").siblings().removeClass("active");
      i=parseInt($target.attr("data-label"));
      moveTo(i)
    }  
  })
  $btnLeft.click(function(e){
    move(-1);
  })
  $btnRight.click(function(e){
    move(1);
  });
  $main.mouseenter(function(){
    clearInterval(t1);
  });
  $(function(e){
    t1=setInterval(function(){
      moveTo()
    },3000)
  })
}
export {carousel}

