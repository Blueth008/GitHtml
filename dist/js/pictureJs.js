
var htitle = document.querySelector('h1');
htitle.style.textAlign="center";

var section = document.getElementsByClassName('section')[0];
var ht2 = section.getElementsByTagName('span');
for(var i=0;i<ht2.length;i++){  //随机颜色
  ht2[i].style.backgroundColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
  console.log(ht2[i].style.backgroundColor);
}
