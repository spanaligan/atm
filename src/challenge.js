let totalCheckingDeposit = 0;

// const enterData = document.querySelector('.input');
// let balance = document.querySelector('.balance');
const submitChecking = document.querySelector('#checking');

// I tried to move the checking submit into the class so I can access the same function with the savings account,
// but I lost all my global variables so I decided to press forward with making all the code work first.
const enterCheckingData = document.querySelector('.input');
let checkingBalance = document.querySelector('.balance');
let redChecking = document.querySelector('#checking .balance');

submitChecking.addEventListener('click', function (evt) {
    if (evt.target.className === 'deposit') {
        if (isNaN(Number(enterCheckingData.value))) {
            alert('please enter a valid number');
        } else {
            totalCheckingDeposit += parseFloat(Number(enterCheckingData.value).toFixed(2));
            // the toFixed allows me to limit number input to 2 decimal places (money) which I have to use with
            // parseFloat or I get a really weird multiple decimal number.
            checkingBalance.textContent = '$' + totalCheckingDeposit;
            // got the balance to update to the cumulative deposit!
        }
    } else if (evt.target.className === 'withdraw') {
        if (isNaN(Number(enterCheckingData.value))) {
            alert('please enter a valid number');
        } else {
            totalCheckingDeposit -= parseFloat(Number(enterCheckingData.value).toFixed(2));
            if (totalCheckingDeposit > 0) {
                checkingBalance.textContent = '$' + totalCheckingDeposit;
                // got the balance to update to the decremented deposit!

            } else {
                alert('You do not have enough money in your account to make this withdrawal! Are you sure you want' +
                    ' to withdraw this money?');
                //the alert worked, but I couldn't get the class name to update
                redChecking.classList.add('zero');
                checkingBalance.textContent = '$' + totalCheckingDeposit;

            }
        }
    }
});
// I thought changing the variables would easily add functionality to the savings side, but it didn't.
const submitSavings = document.querySelector('#savings');
const enterSavingsData = document.querySelectorAll('.input')[1];
let savingsBalance = document.querySelectorAll('.balance')[1];
let totalSavingsDeposit = 0;
let redSavings = document.querySelector('#savings .balance');
// looked up how to access the second instance of the class
// https://stackoverflow.com/questions/22902447/how-to-get-the-second-match-with-queryselector

submitSavings.addEventListener('click', function (evt) {
    if (evt.target.className === 'deposit') {
        if (isNaN(Number(enterSavingsData.value))) {
            alert('please enter a valid number');
        } else {
            totalSavingsDeposit += parseFloat(Number(enterSavingsData.value).toFixed(2));
            savingsBalance.textContent = '$' + totalSavingsDeposit;

        }
    } else if (evt.target.className === 'withdraw') {
        if (isNaN(Number(enterSavingsData.value))) {
            alert('please enter a valid number');
        } else {
            totalSavingsDeposit -= parseFloat(Number(enterSavingsData.value).toFixed(2));
            if (totalSavingsDeposit > 0) {
                savingsBalance.textContent = '$' + totalSavingsDeposit;
                // got the balance to update to the decremented deposit!
            } else {
                alert('You do not have enough money in your account to make this withdrawal! Are you sure you want' +
                    ' to withdraw this money?');
                //the alert worked, but I couldn't get the class name to update
                redSavings.classList.add('zero');
                savingsBalance.textContent = '$' + totalSavingsDeposit;
            }
        }
    }
});

// Realized that in putting the input inside of the event listener that is 'click' that as soon as i click in the
// box to enter data, I get the alert message. So I'm writing a separate function to access that box.
//
// const enterData = document.querySelector('.input');
// let balance = document.getElementsByClassName('.balance');
// //enterData.addEventListener('input', updateBalance);
// function updateBalance() {
//     alert(enterData.value);
//     balance.textContent = enterData.value;
// }

// References: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// https://stackoverflow.com/questions/19696758/onclick-event-on-submit-button
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed