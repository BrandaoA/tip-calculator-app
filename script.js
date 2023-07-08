/*for the input values*/
let x = document.getElementById("bill");
let y = document.getElementById("num-people");
let tipPercentage = document.querySelectorAll(".btn");
let customPercentage = document.getElementById("btn-custom");
let tipPerPerson = document.getElementById("tip-person");
let totalTipPerPerson = document.getElementById("total-tip");
let resetButton = document.querySelector(".reset");
let inputError = document.querySelector(".num-peoples");

/*for error state*/
const errorMessage = document.querySelector(".error-message");

/*normal tip calculation*/

let a = "" 
let b = ""
let c = "" /*for Tip Amount / person*/
let d = "" /* for Total / person*/

tipPercentage.forEach(tipPercentage => {
  tipPercentage.addEventListener("click", () => {
    /* to make sure number of people has a value*/
    if (Number(y.value == 0)){
      errorMessage.style.display = "unset";
      inputError.classList.add("active");

    } else if(Number(y.value > 0)) {
      inputError.classList.remove("active");
      errorMessage.style.display = "none";
      if (Number(tipPercentage.value) >= 0) {
        a = Number(tipPercentage.value / 100);
  
        if (Number(x.value > 0)) {
          b = Number(x.value) / Number(y.value);
        }
        c = a * b;
        d = b +c
        tipPerPerson.innerHTML = `$${Math.floor((c + Number.EPSILON) * 100) / 100}`;
  
        totalTipPerPerson.innerHTML = `$${Math.round((d + Number.EPSILON) * 100) / 100}`;
      } 
    }
  }) 
})

/* reset button*/
resetButton.addEventListener("click", () => {
  tipPerPerson.innerHTML = "$0.00";
  totalTipPerPerson.innerHTML = "$0.00";
  x.value = "";
  y.value = "";
  inputError.classList.remove("active");
  errorMessage.style.display = "none";
})

