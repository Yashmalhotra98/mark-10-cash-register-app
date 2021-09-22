const remainAmt = document.querySelector("#remaining-amt");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    // The above statement hides the display property for the CSS selector bound with the message element. 

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

// NOTE:- To avoid variable overriding we use diffeeret variables when declaring  or using arguments in functions
// like We've used the message variable above and the msg will avoid overriding it, otherwise if we've use the same message variable 
// No result would've been displayed.
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage() {
    message.style.display = "none";
}
