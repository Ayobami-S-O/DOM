const colors = ["green", "yellow", "red", "blue", "purple", "orange", "pink", "brown", "black", "indigo"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNum(){
    const myNumber = Math.random();
    console.log(`The random Number is ${myNumber} The rounded Number is ${Math.floor(myNumber * colors.length)}`)
    return Math.floor(myNumber * colors.length)
}