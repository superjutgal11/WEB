// const animals=["호랑이","사자","곰","인간"];
// console.log(animals.slice(1,2));


// const body = document.getElementsByTagName("body")[0];
// const firstdiv = document.getElementById("firstdiv");
// const newdiv = document.createElement("div");
// firstdiv.appendChild(newdiv);
// console.log(body);


// const newing =document.createElement("img");
// const newh1 =document.createElement("h1");
// newing.src = "멍게";
// newh1.innerText = "멍게";
// newdiv.appendChild(newing);
// newdiv.appendChild(newh1);
// console.log(body);


// const body = document.getElementsByTagName("body")[0];
// const seefood = ["해삼","멍게","말미잘"];
// const table = document.getElementById("table");

// let i = 0;

// function addSeeFood(){
//     if (i<seefood.length){
//         const newdiv = document.createElement("h1");
//         newdiv.innerHTML = seefood[i];
//         table.appendChild(newdiv);
//         i++;
//     }
// }

// function removeSeefood(){
//     if(i>0){
//         i--;
//         const lastChild = table.lastChild;
//         table.removeChild(lastChild);
//     }
// }

// document.getElementById("addBtn").addEventListener("click",addSeeFood);
// document
//     .getElementById("removeBtn")
//     .addEventListener("click",removeSeefood);


window.addEventListener("scroll",function(){
    var currentPosition=
    window.pageYOffset || this.document.documentElement.scrollTop;

    if(currentPosition >= 500){
        this.window.scrollTo({
            top: 0,
            behavior:"smooth",
        });
    } else {
        console.log("스크롤 위치가 500px 이상이 아닙니디.");
    }
});
