let amountValueCO = "";
let chargeValueCO = "";
let displayTotalCO = "";



function amountCO () {
amountValueCO = document.getElementById("amountInputCO").value;
computeTotalCO();
}

document.getElementById("amountInputCO").addEventListener("keydown", function(event)  {
if (event.key === "Enter" ) { amountCO(); 
} 
});

function chargeCO () {
chargeValueCO = document.getElementById("chargeInputCO").value;
computeTotalCO();
}

document.getElementById("chargeInputCO").addEventListener("keydown", function (event) {
if (event.key === "Enter" ) { chargeCO();
}
});

function computeTotalCO() {
let transacChargeCO = Math.ceil(amountValueCO /500)*5;
if (amountValueCO > 0 && chargeValueCO >= 0){
displayTotalCO = amountValueCO - Math.abs(transacChargeCO - chargeValueCO );
document.getElementById("totalCO").innerHTML= "Total: " + displayTotalCO;
}
}