let paymentAmount = document.getElementById("amountP");
let paymentPurpose = document.getElementById("purposeP");
let displayPaidAmount = document.getElementById("paid-amount");
let displayTotal = document.getElementById("totalP");
let getConfirmButton = document.getElementById("confirm-P");
let getOverlayPayment = document.getElementById("overlay-P");
let isTherePayment = false;
let isTherePurpose = false;
displayTotal.style.textAlign = "justify";


  function isAmountAndPurposeTrue() {
if(isTherePayment === true && isTherePurpose === true){
  let getPaymentAmount = paymentAmount.value;
  let getPurposeDetail = paymentPurpose.value;
  displayTotal.style.textAlign = "justify";
  displayTotal.innerHTML = `Total: ${getPaymentAmount} (${getPurposeDetail})`;
  getConfirmButton.style.backgroundColor = "yellow";
  }
  else{
  displayTotal.style.textAlign = "justify";
  displayTotal.innerHTML = "Total: ";
  getConfirmButton.style.backgroundColor = "gray";
  }
}

function paymentEnter() {
  let getPaymentAmount = parseFloat(paymentAmount.value);
  if (getPaymentAmount > 0 && getPaymentAmount !== ""){
  displayPaidAmount.innerHTML =  `Paid amount: Php ${getPaymentAmount.toFixed(2)}`;
  displayPaidAmount.style.color = "black";
  displayTotal.innerHTML = "Total: "
  displayTotal.style.textAlign = "justify";
  console.log(displayPaidAmount);
  isTherePayment = true;
  if(isTherePurpose === true ? isAmountAndPurposeTrue(): paymentPurpose.focus());
}

  else {
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
  if(getPurposeDetail !== ""){
    document.getElementById("purpose-status").innerHTML = "Purpose: ";
    document.getElementById("purpose-status").style.color = "red";
    document.getElementById("purpose-status").style.color = "black";
    let getPaymentAmount = parseFloat(paymentAmount.value);
    isTherePurpose = true;
    if(isTherePayment === true ? isAmountAndPurposeTrue(): paymentAmount.focus());
  }
  else {
    document.getElementById("purpose-status").innerHTML = "Please Input valid purpose *";
    document.getElementById("purpose-status").style.color = "red";
    isTherePurpose = false;
    isAmountAndPurposeTrue();
  }
  
  


}//do later if isTherePayment == false //

document
  .getElementById("purposeP")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      purposeEnter();
    }
  });

  function overlayP () {
if(getConfirmButton.style.backgroundColor ==="yellow"){
   getOverlayPayment.style.display = "flex" 
 }
 else{
   displayTotal.innerHTML = "Make sure both inputs are filled in properly."
   displayTotal.style.textAlign = "center";
   displayTotal.style.color = "red";
   if(isTherePayment === false){
     paymentAmount.focus();
   }
   else {
    paymentEnter.focus()
   }
  }}






  