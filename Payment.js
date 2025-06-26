let paymentAmount = document.getElementById("amountP");
let paymentPurpose = document.getElementById("purposeP");
let displayPaidAmount = document.getElementById("paid-amount");
let displayTotal = document.getElementById("totalP");
let getConfirmButton = document.getElementById("confirm-P");
let getOverlayPayment = document.getElementById("overlay-P");
let getTransactionDetails = document.getElementById("transaction-details-P");
let getDateId = document.getElementById("date-P");
let isTherePayment = false;
let isTherePurpose = false;
displayTotal.style.textAlign = "justify";

function isAmountAndPurposeTrue() {
  if (isTherePayment === true && isTherePurpose === true) {
    let getPaymentAmount = paymentAmount.value;
    let getPurposeDetail = paymentPurpose.value;
    displayTotal.style.textAlign = "justify";
    displayTotal.innerHTML = `Total: ${getPaymentAmount} (${getPurposeDetail})`;
    getConfirmButton.style.backgroundColor = "yellow";
  } else {
    displayTotal.style.textAlign = "justify";
    displayTotal.innerHTML = "Total: ";
    getConfirmButton.style.backgroundColor = "gray";
  }
}

function paymentEnter() {
  let getPaymentAmount = parseFloat(paymentAmount.value);
  if (getPaymentAmount > 0 && getPaymentAmount !== "") {
    displayPaidAmount.innerHTML = `Paid amount: Php ${getPaymentAmount.toFixed(
      2
    )}`;
    displayPaidAmount.style.color = "black";
    displayTotal.innerHTML = "Total: ";
    displayTotal.style.textAlign = "justify";
    isTherePayment = true;
    if (
      isTherePurpose === true
        ? isAmountAndPurposeTrue()
        : paymentPurpose.focus()
    );
  } else {
    displayPaidAmount.innerHTML = "Paid amount: Invalid input *";
    displayPaidAmount.style.color = "red";
    isTherePayment = false;
    isAmountAndPurposeTrue();
  }
}

document
  .getElementById("amountP")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      paymentEnter();
    }
  });

function purposeEnter() {
  let getPurposeDetail = paymentPurpose.value;
  if (getPurposeDetail !== "") {
    document.getElementById("purpose-status").innerHTML = "Purpose: ";
    document.getElementById("purpose-status").style.color = "red";
    document.getElementById("purpose-status").style.color = "black";
    let getPaymentAmount = parseFloat(paymentAmount.value);
    isTherePurpose = true;
    if (
      isTherePayment === true ? isAmountAndPurposeTrue() : paymentAmount.focus()
    );
  } else {
    document.getElementById("purpose-status").innerHTML =
      "Please Input valid purpose *";
    document.getElementById("purpose-status").style.color = "red";
    isTherePurpose = false;
    isAmountAndPurposeTrue();
  }
}

document
  .getElementById("purposeP")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      purposeEnter();
    }
  });

function overlayP() {
  if (getConfirmButton.style.backgroundColor === "yellow") {
    getOverlayPayment.style.display = "flex";
    let displayTransactionDetail =
      (getTransactionDetails.innerHTML = `P: ${paymentAmount.value} (${paymentPurpose.value})`);
    let getCurrentTime = new Date().toLocaleTimeString();
    let displayTime = (getDateId.innerHTML = `(${getCurrentTime})`);
    let totalLogP = `${displayTransactionDetail} ${displayTime}`;

    let existingLogs =
      JSON.parse(localStorage.getItem("transactionLogs")) || [];
    existingLogs.push(totalLogP);
    localStorage.setItem("transactionLogs", JSON.stringify(existingLogs));
  } else {
    displayTotal.innerHTML = "Make sure the transaction is valid before confirming.";
    displayTotal.style.textAlign = "center";
    displayTotal.style.color = "black";
    if (isTherePayment === false) {
      paymentAmount.focus();
    } else {
      paymentPurpose.focus();
    }
    
  }
}
