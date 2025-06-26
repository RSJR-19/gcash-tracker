let amountCI = 0;
let paymentCI = 0;
let checker = false;
let charge = 0;
let toPay = 0;
let changeCI = " ";

function amount() {
  amountCI = parseFloat(document.getElementById("amountSend").value);
  charge = Math.ceil(amountCI / 500) * 5;
  document.getElementById("amountCI").innerHTML =
   // "Amount paid: " + "Php " + amountCI + ".00 " + "( " + charge + " Charge)";//
    `Amount paid: Php ${amountCI.toFixed(2)} (${charge} Charge)`;
  document.getElementById("paymentRcvd").focus();
}

document
  .getElementById("amountSend")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      amount();
      compute();
    }
  });

function payment() {
  paymentCI = parseFloat(document.getElementById("paymentRcvd").value);
  document.getElementById("paymentCI").innerHTML =`Payment given: Php ${paymentCI.toFixed(2)}`;
}

document
  .getElementById("paymentRcvd")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      payment();
      compute();
    }
  });

function compute() {
  charge = Math.ceil(amountCI / 500) * 5;
  toPay = amountCI + charge;

  if (amountCI > 0 && paymentCI > 0) {
    checker = true;
    if (amountCI === paymentCI) {
      changeCI = "Walang bayad charge?";
      document.getElementById("confirmCI").style.backgroundColor = "gray";
      checker = false;
    } else if (toPay > paymentCI) {
      changeCI = "TANGAY PATI PUHUNAN";
      document.getElementById("confirmCI").style.backgroundColor = "gray";
      checker = false;
    } else {
      changeCI = "Change: " + "Php " + (paymentCI - toPay) + ".00";
      document.getElementById("confirmCI").style.backgroundColor = "yellow";
      checker = true;
      document.getElementById("changeCI").style.textAlign = "justify";
    }

    document.getElementById("changeCI").innerHTML = changeCI;

    return changeCI;
  } else {
    checker = false;
    document.getElementById("confirmCI").style.backgroundColor = "gray";
  }
}

function confirm() {
  if (checker === true) {
    let displayTime = new Date().toLocaleTimeString();
    document.getElementById("overlayCI").style.display = "flex";
    document.getElementById("detailsCI").innerHTML =
      "CI: " + amountCI + " / " + paymentCI + " = " + (paymentCI - toPay);
    document.getElementById("dateCI").innerHTML =
      "(" + displayTime.toLocaleString() + ")";
    let logDetailsCI = document.getElementById("detailsCI").innerText;
    let logDateCI = document.getElementById("dateCI").innerText;
    let totalLogCI = logDetailsCI + " " + logDateCI;

    let existingLogs =
      JSON.parse(localStorage.getItem("transactionLogs")) || [];
    /* "localStorage.getItem("transactionLogs")" bali tinitignan muna kung merong existing na na array para sa logs
JSON.parse = para syang parse.float kung san ung string ibabalik niya to object form 
JSON.stringify = pang convert ng mga object sa string para pwede sila sa localStorage
 || [] = para siyang "else" na kapag ka wala pang value or wala pang existing array, gagawa or gamit nalang ng new array
 */

    existingLogs.push(totalLogCI); //yung latest na value ng totalLogCI "pinupush" or dinadagdag sa array //
    localStorage.setItem("transactionLogs", JSON.stringify(existingLogs)); // sinesave ung details sa browser //
  } else {
    document.getElementById("changeCI").style.textAlign = "center";
    document.getElementById("changeCI").innerHTML =
      "Make sure the transaction is valid before confirming.";
  }
}
