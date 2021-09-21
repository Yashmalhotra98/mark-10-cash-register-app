const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const remainAmt = document.querySelector("#remaining-amt");

// checkButton.addEventListener('click', function getValues() {
//     console.log(billAmount, cashGiven);
// })
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            remainAmt.innerText = amountToBeReturned;
            calculateChange(amountToBeReturned);
        } else {
            remainAmt.innerText = "";
            showMessage("Please Enter Appropirate Cash!");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    //for getting all the available notes
    for (let i = 0; i < availableNotes.length; i++) {
        //no of notes needed for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        //amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        //updating the no of notes in the table    
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}