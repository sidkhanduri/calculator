

let calculation = localStorage.getItem('calculation') || '';
// let calculation = ''; should use this if don't want to history
displayCalculation();

function updateCalculation(temp) {
  /* if (calculation == 0) {
    calculation = temp;
  }else {
    calculation += temp;
    console.log(calculation);
  } */
  calculation += temp;
  // console.log(calculation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-output').innerHTML = calculation;
}


    