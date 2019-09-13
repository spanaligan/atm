class Account {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    depositMoney(accountType) {
        if (accountType === 'checking') {
            accountType = document.querySelector('#checking');
        } else if (accountType === 'savings') {
            accountType = document.querySelector('#savings');
        }
        accountType.addEventListener('click', function (evt) {
            if (isNaN(Number(enterData.value))) {
                alert('please enter a valid number');
            } else {
                totalDeposit += parseFloat(Number(enterData.value).toFixed(2));
                // the toFixed allows me to limit number input to 2 decimal places (money) which I have to use with
                // parseFloat or I get a really weird multiple decimal number.
                balance.textContent = '$' + totalDeposit;
                // got the balance to update to the cumulative deposit!
            }
        })
    }

    withdrawMoney(amount) {
        if (this.money <= 0) {
            alert('You do not have enough money in your account to cover that withdrawal');
        } else {
            alert(`You have taken $${amount} out of ${this.name} account.`);
        }
    }

}

let totalDeposit = 0;
const enterData = document.querySelector('.input');
let balance = document.querySelector('.balance');
// construct new account
let checking = new Account('Sarah\'s Checking Account', 5);
// accessing entered data from text input
const checkingInput = checking.depositMoney(checking);

alert(checkingInput);