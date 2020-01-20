var timer;
window.onload=function(){
    var container=document.getElementById('container');
    var box1=document.getElementById('box1');var tright=document.getElementById('tright'); vartleft=document.getElementById('tleft'); 
tright.onclick=function(){
    if(parseInt(box1.style.left)==0)
    tune(-3000);
    tune(600);
}
tleft.onclick=function(){
    if(parseInt(box1.style.left)==-2400)
    tune(3000)
    tune(-600);
}
function tune(number){
    var newLeft=parseInt(box1.style.left,10)+number;
    box1.style.left=newLeft+"px";
}
function clock(){
    timer=setInterval(function(){
        tleft.onclick()
    }, 1500);
}
clock();
container.onmouseover=stop;
container.onmouseout=clock;
function stop(){
  clearInterval(timer);
}
}


