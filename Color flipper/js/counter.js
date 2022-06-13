let count = 0;

const btns = document.querySelectorAll(".btn");
console.log(btns);

const value = document.querySelector("#value")

 btns.forEach(btn =>{
    console.log(btn);
    btn.addEventListener('click', (e) => {
        const btnClass = e.target;
        console.log(btnClass)
    })
})