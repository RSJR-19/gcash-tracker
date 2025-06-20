let amountValueCO = "";
let chargeValueCO = "";
let displayTotalCO = "";
let rneeAccCO = document.getElementById("rneeCO");
let lizaAccCO = document.getElementById("lizaCO");
let checkerCO = 0; // if 0 wala if 1 rnee if 2 liza //
let clearButton = document.getElementById("clearCO");
clearButton.style.display = "none";



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




function clearCheck() {
clearButton.style.display = "none";
rneeAccCO.checked = false;
lizaAccCO.checked = false;
checkerCO = 0;


validate()
}

function validate() {
    if (rneeAccCO.checked || lizaAccCO.checked ){
        if (rneeAccCO.checked) {
            clearButton.style.display = "inline";
            document.getElementById("lizaLabel").style.display = "none";
            checkerCO = 1;
        }
        else if (lizaAccCO.checked) {
             clearButton.style.display = "inline";
            document.getElementById("rneeLabel").style.display = "none";
            checkerCO = 2;
        
        }}
    else {
        document.getElementById("rneeLabel").style.display = "inline";
        document.getElementById("lizaLabel").style.display = "inline";
        clearButton.style.display = "none";
        checkerCO = 0;
    }}


    






