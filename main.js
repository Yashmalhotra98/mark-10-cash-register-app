var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var checkButton = document.querySelector('#check-button');
var message = document.querySelector('#error-message');

// console.log(billAmount, cashGiven);

checkButton.addEventListener('click', checkClickHandler);

var billAmt = billAmount.Value;
var cashGvn = cashGiven.Value;

function validateBillAmount(billAmt) {
    if (billAmt > 0) {

    } else {
        message.innerText = 'The bill amount should be greater than 0';
    }
}

function checkCashAmount(cashGvn, billAmt) {
    if (cashGvn > billAmt) {

    } else {
        message.innerText = 'The Cash Given must be greater than the Bill Amount';
    }
}

function checkClickHandler() {
    validateBillAmount(billAmt);
    checkCashAmount(cashGvn, billAmt);

}