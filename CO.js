let amountValueCO = "";
let chargeValueCO = "";



function amountCO () {
amountValueCO = document.getElementById("amountInputCO").value;
document.getElementById("totalCO").innerHTML= "Total: " + amountValueCO;
}

document.getElementById("amountInputCO").addEventListener("keydown", function(event)  {
if (event.key === "Enter" ) { amountCO(); 
} 
});

function chargeCO () {
chargeValueCO = document.getElementById("chargeInputCO").value;
document.getElementById("totalCO").innerHTML = "Total: " + chargeValueCO ;
}

document.getElementById("chargeInputCO").addEventListener("keydown", function (event) {
if (event.key === "Enter" ) { chargeCO();
}
});
