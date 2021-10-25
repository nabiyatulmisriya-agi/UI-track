var btn = document.getElementById("btn");
var paraTag = document.querySelector(".container");
console.log(paraTag);
console.log(btn);
function parentElement() {
  console.log(paraTag.parentNode);
}
btn.addEventListener("click", parentElement);

var btn1 = document.getElementById("btn1");
var para = document.querySelector(".container");
console.log(para);
console.log(btn1);
function firstchild() {
  console.log(para.firstElementChild);
}
btn1.addEventListener("click", firstchild);

var btn2 = document.getElementById("btn2");
var paraT = document.querySelector(".container");
console.log(paraT);
console.log(btn2);
function lastchild() {
  console.log(paraT.lastElementChild);
}
btn2.addEventListener("click", lastchild);
