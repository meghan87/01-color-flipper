const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorElem = document.querySelector(".color");
const clickBtn = document.querySelector("#btn");

clickBtn.addEventListener("click",changeColor);

function changeColor(){
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    colorElem.innerText = colors[random];
}


