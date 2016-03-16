/**
 * Created by HH on 2016/1/28.
 */
function start(){
  var width = $(window).width();
  var height = $(window).height();
  $('.cont').css('width', width+'px');
  $('.ranking .tuhao').css('height', height/4+'px');
}

function present(e) {
  var target = e.srcElement || e.target;
  //target.style.
  $('.footer').css('position','fixed');
  //$('.footer').css('height',height/20+'px');
  $('.footer').css('bottom','1.5em');
  $('.footer').css('left','2em');
  $('.pay_show').fadeIn(3000);
}

/*页面加载调用*/
window.onload=function(){
  start();
  $('.first_show').fadeOut(5000);
  //
}
