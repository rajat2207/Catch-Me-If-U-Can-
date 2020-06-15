var box=document.getElementById('box');
var canvas=document.getElementById('canvas');

window.addEventListener('load',function(){
    box.style.left=0+'%';
    box.style.top=0+'%';
})

box.addEventListener('mouseover',function(){
    box.style.position='absolute';
    box.style.left=(Math.random()*100)+'%';
    box.style.top=(Math.random()*100)+'%';
})