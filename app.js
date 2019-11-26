// console.log("Hello from app.js")

document.body.style.backgroundColor = "red";

// break

let checkingDepositBtn = document.querySelector('#checking > .deposit');

let checkingAmountInput = document.querySelector('#checking > .input');

console.log(checkingDepositBtn);

// break

checkingDepositBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    let checkingamount = checkingAmountInput.value;
    console.log(checkingamount);
   console.log('hello');

});

// enter-an-amount, deposit, withdraw, 

// let balanceDisplay = document.querySelector('.balance');



// let depositBtn = document.querySelector('.deposit');

// let withdrawBtn = document.querySelector('.withdraw');

// console.log(withdrawInput);

