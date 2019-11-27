// console.log("Hello from app.js")

// checking account //

// document.body.style.backgroundColor = "red";

let checkingBalance = 0;

let savingsBalance = 0;

let checkingInput;

let savingsInput;

// line break //

let checkingDepositBtn = document.querySelector('#checking > .deposit');

let checkingAmountInput = document.querySelector('#checking > .input');

let checkingWithdrawBtn = document.querySelector('#checking > .withdraw');

let checkingBalanceDisplay = document.querySelector('#checking > .balance');

console.log(checkingDepositBtn);

// line break //

Deposit = (num1, num2) => {
    return num1 + num2;
};

Withdraw = (num1, num2) => {
    return num1 - num2;
};

// line break //

checkingDepositBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    checkingInput = Number(checkingAmountInput.value);
    let newBalance = Deposit(checkingBalance, checkingInput);
    checkingBalance = newBalance;
    UpdateDisplay(checkingBalanceDisplay, checkingBalance);
    });

    checkingWithdrawBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        checkingInput = Number(checkingAmountInput.value);
        let newBalance = Withdraw(checkingBalance, checkingInput);
        checkingBalance = newBalance;
        UpdateDisplay(checkingBalanceDisplay, checkingBalance);
        });
    
    // line break //

    UpdateDisplay = (display, updatedValue) => {
        return display.innerHTML = updatedValue;
    }; 

    console.log(checkingBalance);
    console.log('hello');

// line break //



// Savings Account //


// line break //

let savingsDepositBtn = document.querySelector('#savings > .deposit');

let savingsAmountInput = document.querySelector('#savings > .input');

let savingsWithdrawBtn = document.querySelector('#savings > .withdraw');

let savingsBalanceDisplay = document.querySelector('#savings > .balance');

console.log(savingsDepositBtn);

// line break //

// Deposit = (num1, num2) => {
//     return num1 + num2;
// };

// Withdraw = (num1, num2) => {
//     return num1 - num2;
// };

// line break //

savingsDepositBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    savingsInput = Number(savingsAmountInput.value);
    let newBalance = Deposit(savingsBalance, savingsInput);
    savingsBalance = newBalance;
    UpdateDisplay(savingsBalanceDisplay, savingsBalance);
    });

savingsWithdrawBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    savingsInput = Number(savingsAmountInput.value);
    let newBalance = Withdraw(savingsBalance, savingsInput);
    savingsBalance = newBalance;
    
    UpdateDisplay(savingsBalanceDisplay, savingsBalance);
    });
    
    // line break //

    // UpdateDisplay = (display, updatedValue) => {
    //     return display.innerHTML = updatedValue;
    // }; 

    console.log(savingsBalance);
    console.log('hello');

// line break //







