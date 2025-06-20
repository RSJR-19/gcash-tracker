let amountValueCO = "";
let chargeValueCO = "";
let displayTotalCO = "";
let checkerCO = 0; // if 0 wala if 1 rnee if 2 liza //




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

function validate(event) {
    const clickedBox = event.target;
    let rneeAccCO = document.getElementById("rneeCO");
    let lizaAccCO = document.getElementById("lizaCO");
    

    
        if (clickedBox === rneeAccCO && rneeAccCO.checked) {
            lizaAccCO.checked = false;
            document.getElementById("rneeLabel").style.fontWeight = "bold";
            document.getElementById("lizaLabel").style.fontWeight = "normal";
            checkerCO = 1;

        }
        else if (clickedBox === lizaAccCO && lizaAccCO.checked) {
            rneeAccCO.checked = false;
            document.getElementById("lizaLabel").style.fontWeight= "bold";
            document.getElementById("rneeLabel").style.fontWeight= "normal";
            checkerCO = 2;
        
        }
    else {
        document.getElementById("rneeLabel").style.fontWeight = "normal";
        document.getElementById("lizaLabel").style.fontWeight = "normal";
        checkerCO = 0;
       
    }
}

    






