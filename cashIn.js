let amountCI = 0;
let paymentCI = 0;
let checker = 0;
let charge = 0;
let toPay = 0;
let changeCI = " ";



function amount() {
 amountCI = parseFloat(document.getElementById("amountSend").value);
 charge = Math.ceil(amountCI/ 500)*5;
 document.getElementById("amountCI").innerHTML="Amount paid: " + "Php " + amountCI + ".00 " +"( " + charge + " Charge)";
 document.getElementById("paymentRcvd").focus();
 
}

document.getElementById("amountSend").addEventListener("keydown",function (event) {
    if (event.key === "Enter") { amount();compute();
    }
});

function payment() {
paymentCI = parseFloat(document.getElementById("paymentRcvd").value);
document.getElementById("paymentCI").innerHTML="Payment given: " + "Php " + paymentCI + ".00";

}

document.getElementById("paymentRcvd").addEventListener("keydown",function (event) {
    if (event.key === "Enter") { payment(); compute();
    }
});



function compute () {
charge = Math.ceil(amountCI / 500) *5;
toPay = amountCI + charge;

if (amountCI > 0 && paymentCI > 0) {
     checker = 1;
     if (amountCI === paymentCI) {
     changeCI = "Walang bayad charge?";
        document.getElementById("confirmCI").style.backgroundColor = "gray";
        checker = 0;
}

else if (toPay > paymentCI) {
     changeCI = "TANGAY PATI PUHUNAN"; 
        document.getElementById("confirmCI").style.backgroundColor = "gray";
        checker = 0;
}

else{
    changeCI = "Change: " + "Php " + (paymentCI - toPay) + ".00";
       document.getElementById("confirmCI").style.backgroundColor = "yellow"
       checker = 1;
       document.getElementById("changeCI").style.textAlign = "justify"; 
}

 ;

 document.getElementById("changeCI").innerHTML = changeCI;

    return changeCI;

}




else {
checker = 0;
document.getElementById("confirmCI").style.backgroundColor = "gray";
}



}

 function confirm() {
if (checker === 1){
let displayTime = new Date ();
document.getElementById("overlayCI").style.display="flex";
document.getElementById("detailsCI").innerHTML= "CI: " + amountCI + " / " + paymentCI + " = " + (paymentCI - toPay);
document.getElementById("dateCI").innerHTML= "(Date: " + displayTime.toLocaleString() + ")";
let logDetailsCI = document.getElementById("detailsCI").innerText;
let logDateCI = document.getElementById("dateCI").innerText;
let totalLogCI = logDetailsCI + " " +  logDateCI;

let existingLogs = JSON.parse(localStorage.getItem("transactionLogs")) || [];
/* "localStorage.getItem("transactionLogs")" bali tinitignan muna kung merong existing na na array para sa logs
JSON.parse = para syang parse.float kung san ung string ibabalik niya to object form 
JSON.stringify = pang convert ng mga object sa string para pwede sila sa localStorage
 || [] = para siyang "else" na kapag ka wala pang value or wala pang existing array, gagawa or gamit nalang ng new array
 */

existingLogs.push(totalLogCI); //yung latest na value ng totalLogCI "pinupush" or dinadagdag sa array //
localStorage.setItem("transactionLogs",JSON.stringify(existingLogs)); // sinesave ung details sa browser //

}

else {
    document.getElementById("changeCI").style.textAlign = "center";
    document.getElementById("changeCI").innerHTML = "Make sure the transaction is valid before confirming.";
}
 }


