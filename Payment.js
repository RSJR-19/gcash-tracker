let paymentAmountValue = document.getElementById("amountP");
let paymentPurpose = document.getElementById("purposeP");
let isTherePayment = false;
let isTherePurpose = false;

function paymentEnter() {
  paymentAmountValue.value;
  document.getElementById("paid-amount").innerHTML =
    "Paid amount: " + "Php " + paymentAmountValue.value + ".00";
  if (isTherePurpose === true) {
    //once the confirm details is now ready //
  } else {
    document.getElementById("purposeP").focus();
  }
  if (paymentAmountValue.value > 0){
    isTherePayment = true;
  }
  else {
    isTherePayment = false;
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
  paymentPurpose.value;
  document.getElementById("totalP").innerHTML =
    "Total: " + paymentPurpose.value;
    if (isTherePayment === false){
        document.getElementById("amountP").focus();
    }
    else {
        // switch to confirm button soon//
    }
    if (paymentPurpose.value.trim() !== ""){
        isTherePurpose = true;
    }
    else {
        isTherePurpose = false;
    }
}

document
  .getElementById("purposeP")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      purposeEnter();
    }
  });
