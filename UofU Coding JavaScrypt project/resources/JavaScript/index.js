var box=document.querySelector("#box")
var num=150;
function grow() {
    num+=25;
    box.style.height=num+"px";
    box.style.width=num+"px";
}
function blue(){
    box.style.backgroundColor="blue";
}
function fade(){
    box.style.opacity -= 0.2;
}
function reset(){
    box.style="height:150px; width:150px; background-color:orange;opacity:1.0; margin:25px";
}