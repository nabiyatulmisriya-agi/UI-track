var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var home = document.querySelector(".home");
var changecolor1 = function () {
  home.classList.add("black");
};
var home = document.querySelector(".home");
var changecolor2 = function () {
  home.classList.add("orange");
};
var home = document.querySelector(".home");
var changecolor3 = function () {
  home.classList.add("blue");
};

btn1.addEventListener("click", changecolor1);
btn2.addEventListener("click", changecolor2);
btn3.addEventListener("click", changecolor3);
