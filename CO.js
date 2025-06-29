let amountValueCO = "0";
let chargeValueCO = "";
let displayTotalCO = "";
let checkerCO = "void"; // if void wala  //
document.getElementById("totalCO").style.textAlign = "justify";

function amountCO() {
  amountValueCO = parseFloat(document.getElementById("amountInputCO").value);
  let transacChargeCO = Math.ceil(amountValueCO / 500) * 5;
  document.getElementById("amountDisplay").innerHTML = ` Amount: Php ${amountValueCO.toFixed(2)} (${transacChargeCO} Charge)`;
  document.getElementById("chargeInputCO").focus();
  computeTotalCO();
  confirmCO();
  document.getElementById("totalCO").style.textAlign = "justify";
}

document
  .getElementById("amountInputCO")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      amountCO();
    }
  });

function chargeCO() {
  chargeValueCO = Number(document.getElementById("chargeInputCO").value);
  computeTotalCO();
}

document
  .getElementById("chargeInputCO")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      chargeCO();
    }
  });

function computeTotalCO() {
  transacChargeCO = Math.ceil(amountValueCO / 500) * 5;
  if (amountValueCO > 0 && chargeValueCO >= 0) {
    if (chargeValueCO > transacChargeCO) {
      displayTotalCO = amountValueCO + (chargeValueCO - transacChargeCO);
      document.getElementById("totalCO").innerHTML =
        "Total: " + "Php " + displayTotalCO + ".00";
    } else {
      displayTotalCO =
        amountValueCO - Math.abs(transacChargeCO - chargeValueCO);
      document.getElementById("totalCO").innerHTML =
        "Total: " + "Php " + displayTotalCO + ".00";
    }
  } else if (amountValueCO === 0) {
    document.getElementById("amountDisplay").innerHTML =
      "Amount: Input valid Amount * ";
    document.getElementById("totalCO").innerHTML = "Total: ";
  }
}

function validate(event) {
  const clickedBox = event.target;
  let rneeAccCO = document.getElementById("rneeCO");
  let lizaAccCO = document.getElementById("lizaCO");

  if (clickedBox === rneeAccCO && rneeAccCO.checked) {
    lizaAccCO.checked = false;
    document.getElementById("rneeLabel").style.fontWeight = "bold";
    document.getElementById("lizaLabel").style.fontWeight = "normal";
    checkerCO = "rnee";
    confirmCO();
    amountCO();
  } else if (clickedBox === lizaAccCO && lizaAccCO.checked) {
    rneeAccCO.checked = false;
    document.getElementById("lizaLabel").style.fontWeight = "bold";
    document.getElementById("rneeLabel").style.fontWeight = "normal";
    checkerCO = "liza";
    confirmCO();
    amountCO();
  } else {
    document.getElementById("rneeLabel").style.fontWeight = "normal";
    document.getElementById("lizaLabel").style.fontWeight = "normal";
    checkerCO = "void";
    confirmCO();
  }
}

//confirm details final//

function confirmCO() {
  if (
    (checkerCO === "rnee" || checkerCO === "liza") &&
    amountValueCO - transacChargeCO > 0
  ) {
    document.getElementById("confirmDetailsCO").style.backgroundColor =
      "yellow";
  } else if (amountValueCO - transacChargeCO <= 0) {
    document.getElementById("confirmDetailsCO").style.backgroundColor = "gray";
  } else {
    document.getElementById("confirmDetailsCO").style.backgroundColor = "gray";
    checkerCO = "void";
  }
}

function confirmTransacCO() {
  if (
    document.getElementById("confirmDetailsCO").style.backgroundColor ===
    "yellow"
  ) {
    const displayTimeCO = new Date().toLocaleTimeString();
    const accountUsed = checkerCO === "rnee" ? " R " : checkerCO === "liza" ? " L " : " ";
    document.getElementById("overlayCO").style.display = "flex";
    if (chargeValueCO > 0) {
      document.getElementById("detailsCO").innerHTML = `CO: ${accountUsed} ${amountValueCO} = ${displayTotalCO} \n(Nagbigay ${chargeValueCO})`;


      document.getElementById("dateCO").innerHTML =
       `(${displayTimeCO})`;
      let logDetailsCO = document.getElementById("detailsCO").innerText;
      let logDateCO = document.getElementById("dateCO").innerText;
      let totalLogCO = logDetailsCO + " " + logDateCO;

      let existingLogs =
        JSON.parse(localStorage.getItem("transactionLogs")) || [];
      existingLogs.push(totalLogCO);
      localStorage.setItem("transactionLogs", JSON.stringify(existingLogs));
    } else {
      document.getElementById("detailsCO").innerText =
        `CO: ${accountUsed} ${amountValueCO} = ${displayTotalCO}`;
      document.getElementById("dateCO").innerHTML =
        `(${displayTimeCO})`;
      let logDetailsCO = document.getElementById("detailsCO").innerText;
      let logDateCO = document.getElementById("dateCO").innerText;
      let totalLogCO = logDetailsCO + " " + logDateCO;

      let existingLogs =
        JSON.parse(localStorage.getItem("transactionLogs")) || [];
      existingLogs.push(totalLogCO);
      localStorage.setItem("transactionLogs", JSON.stringify(existingLogs));
    }
  } else {
    document.getElementById("totalCO").innerHTML =
      "Make sure the transaction is valid before confirming.";
    document.getElementById("totalCO").style.textAlign = "center";
  }
}

document.getElementById("detailsCO").style.textAlign = "center";
