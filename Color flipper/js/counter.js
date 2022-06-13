let count = 0;

const btns = document.querySelectorAll(".btn");
console.log(btns);

const value = document.querySelector("#value")

 btns.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener('click', (b) => {
        const btnClass = b.currentTarget.classList;
        console.log(btnClass);
        if (btnClass.contains("decrease")){
            count--;
        } else if (btnClass.contains("increase")) {
            count++;
        } else{
            count = 0;
        }
        value.textContent = count;
        console.log(count)
    })
})