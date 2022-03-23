window.onload = function() { /* start when html is ready */
    
var btn0 = document.getElementById("nav-0");
var btn1 = document.getElementById("nav-1");
var btn2 = document.getElementById("nav-2");
var btn3 = document.getElementById("nav-3");

var block1 = document.getElementById("block-1");
var block2 = document.getElementById("block-2");
var block3 = document.getElementById("block-3");

function topPage(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToBlock1(){
    block1.scrollIntoView({behavior: 'smooth'});
}
function scrollToBlock2(){
    block2.scrollIntoView({behavior: 'smooth'});
}
function scrollToBlock3(){
    block3.scrollIntoView({behavior: 'smooth'});
}

btn0.addEventListener("click", topPage);
btn1.addEventListener("click", scrollToBlock1);
btn2.addEventListener("click", scrollToBlock2);
btn3.addEventListener("click", scrollToBlock3);
}