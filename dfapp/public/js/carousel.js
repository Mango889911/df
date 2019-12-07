var carItems=$('.carousel-item');
var $btnLeft=$('#carousel>.btn-left img');
var $btnRight=$('#carousel>.btn-right img');
//索引分页
function pageBtn(e){
  var $carIndex=$(e.target);
  $carIndex.addClass('active').siblings('[data-label]').removeClass('active');
  var index=$carIndex.attr('data-label');
  var selectedItem=$(`.carousel-item[data-label=${index}]`);
  selectedItem.addClass('active').siblings('.carousel-item').removeClass('active');
  $carIndex
}
//自动轮播图片
function autoCar(){
  var $carousel=$('#carousel');
  var timer;
  $carousel.hover(function(){
    clearInterval(timer);
  },function(){
    timer=setInterval(function(){
    var carItem=$('[data-roll=carousel].active');
    if(carItem.attr('data-label')<carItems.length-1){
      var index=carItem.removeClass('active').next().addClass('active').attr('data-label');
      $(`.carousel-index>[data-label=${index}]`).addClass('active').siblings().removeClass('active');
    }else{
      carItem.removeClass('active');
      $(carItems[0]).addClass('active');
      $('.carousel-index>[data-label=0]').addClass('active').siblings().removeClass('active');
    }
  },2000);
  });
}
//向前翻页按钮
$btnLeft.click(function(e){
  var selectedItem=$(`.carousel-main>.carousel-item.active`);
  if(selectedItem.attr('data-label')>0){
    var index=selectedItem.removeClass('active').prev().addClass('active').attr('data-label');
    $(`.carousel-index>li[data-label=${index}]`).addClass('active').siblings().removeClass('active');
  }
  return;
});
//向后翻页按钮
$btnRight.click(function(e){
  var selectedItem=$(`.carousel-main>.carousel-item.active`);
  // console.log(selectedItem);
  if(selectedItem.attr('data-label')<$('.carousel-main>.carousel-item').length-1){
    // console.log(selectedItem.attr('data-label'))
    var index=selectedItem.removeClass('active').next().addClass('active').attr('data-label');
    $(`.carousel-index>li[data-label=${index}]`).addClass('active').siblings().removeClass('active');
  }
  return;
});
console.log({pageBtn,autoCar})
{pageBtn,autoCar}