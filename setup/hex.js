const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}




const colorElem = document.querySelector(".color");
const clickBtn = document.querySelector("#btn");

clickBtn.addEventListener("click",function(){
    let hexValue = "#";
    for(let i=0;i<6;i++){
        hexValue += hex[randomNumber()];
    }

    document.body.style.backgroundColor = hexValue;
    colorElem.innerText = hexValue;
})