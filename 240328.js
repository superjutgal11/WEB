// let btn = document.getElementsByTagName("button");
// let display = document.getElementById("display");
// let hellodiv = document.getElementsByClassName("helloDiv");


// let innerHTML = display.innerHTML;
// let innertext = display.innerText;


// console.log(innerHTML);
// console.log(innertext);


// function addElements(){
//     let displays = document.getElementById("display");
//     displays.innerHTML += '<div class = "helloDiv">안녕하세요</div>';
// }


// btn[0].addEventListener("click",addElements);


// let button = document.getElementById("colorBtn");

// let i=0;

// let colors = ["red" , "green" , "blue" , "yellow" , "purple" , "orange"];

// function changeColor(){
//     document.body.style.backgroundColor = colors[i];
//     i = (i+1)%colors.length;
// }

// button.addEventListener("click",changeColor);


// // Date는 기본적으로 제공되는 내장객체임
// let d1 = new Date();
// let d2 = new Date(2024,0,16);
// let d3 = new Date("January 16,2024 17:28:00");
// let d4 = new Date(2024,0,16,17,28,0,0);

// console.log(d1);
// console.log(d2);
// console.log(d3);
// console.log(d4);


// 시간 출력하는 코드

// function setClock(){
//     let now = new Date();
//     let s = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
//     document.body.innerHTML = "<h1>"+s+"</h1>"

//     setTimeout("setClock()",1000);
// }
// setClock();


// function chan_stri(){
//     let def_stri = document.getElementById("content").innerHTML;
//     document.getElementById("content").innerHTML = def_stri.replace("아기사자","어른사자");
// }