const myForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#userName");
const ageInput = document.querySelector("#userAge");
const myCars = document.querySelector("#cars");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const radioInput = document.querySelector('input[name="country"]:checked');
    const countries = radioInput.value;
    console.log(countries);
    // console.log(nameInput.value);
    // console.log(ageInput.value);
    // console.log(myCars.value);

    if(!nameInput.value){  //can also be written as nameinput.value === ""
       alert("Please enter your name")
    }else if(ageInput.value === ""){
        alert("Please enter your age")
    }else if(myCars.value === ""){
        alert("Please select a car of your choice")
    }else if(countries.value === ""){
        alert("Please select your country")
    }else{
        alert(`Hello ${nameInput.value}, you are  ${ageInput.value} years old`)
    }
})