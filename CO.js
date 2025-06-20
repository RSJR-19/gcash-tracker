let amountValueCO = "0";
let chargeValueCO = "";
let displayTotalCO = "";
let checkerCO = 0; // if 0 wala if 1 rnee if 2 liza //




function amountCO () {
amountValueCO = Number(document.getElementById("amountInputCO").value);
let transacChargeCO = Math.ceil(amountValueCO /500)*5;
document.getElementById("amountDisplay").innerHTML = "Amount: " + "Php " + amountValueCO + ".00" + " ( " + transacChargeCO + " Charge)";
document.getElementById("chargeInputCO").focus();
computeTotalCO();
confirmCO ();
}

document.getElementById("amountInputCO").addEventListener("keydown", function(event)  {
if (event.key === "Enter" ) { amountCO(); 
} 
});

function chargeCO () {
chargeValueCO = Number(document.getElementById("chargeInputCO").value);
computeTotalCO();
}

document.getElementById("chargeInputCO").addEventListener("keydown", function (event) {
if (event.key === "Enter" ) { chargeCO();
}
});

function computeTotalCO() {

transacChargeCO = Math.ceil(amountValueCO /500)*5;
if (amountValueCO > 0 && chargeValueCO >= 0){
if (chargeValueCO > transacChargeCO){
displayTotalCO = amountValueCO + (chargeValueCO - transacChargeCO );
document.getElementById("totalCO").innerHTML= "Total: " + "Php " + displayTotalCO + ".00";
}
else {
displayTotalCO = amountValueCO - Math.abs(transacChargeCO - chargeValueCO );
document.getElementById("totalCO").innerHTML= "Total: " + "Php " + displayTotalCO + ".00";
}}
else if (amountValueCO === 0){
document.getElementById("amountDisplay").innerHTML= "Amount: Input valid Amount * ";
document.getElementById("totalCO").innerHTML= "Total: ";


}}


function validate(event) {
    const clickedBox = event.target;
    let rneeAccCO = document.getElementById("rneeCO");
    let lizaAccCO = document.getElementById("lizaCO");
    

    
        if (clickedBox === rneeAccCO && rneeAccCO.checked) {
            lizaAccCO.checked = false;
            document.getElementById("rneeLabel").style.fontWeight = "bold";
            document.getElementById("lizaLabel").style.fontWeight = "normal";
            checkerCO = 1;
            confirmCO();

        }
        else if (clickedBox === lizaAccCO && lizaAccCO.checked) {
            rneeAccCO.checked = false;
            document.getElementById("lizaLabel").style.fontWeight= "bold";
            document.getElementById("rneeLabel").style.fontWeight= "normal";
            checkerCO = 2;
            confirmCO();
        
        }
    else {
        document.getElementById("rneeLabel").style.fontWeight = "normal";
        document.getElementById("lizaLabel").style.fontWeight = "normal";
        checkerCO = 0;
        confirmCO();
       
    }
}


//confirm details final//

function confirmCO() {
    if ((checkerCO === 1 || checkerCO === 2) && amountValueCO > 0){
        document.getElementById("confirmDetailsCO").style.backgroundColor = "yellow";
    }
    else {
        document.getElementById("confirmDetailsCO").style.backgroundColor = "gray";
    }}

    






