
document.getElementById("trackTransaction").style.display ="flex";
document.getElementById("overlayTransac").style.display ="none"; //change this to "none" later //
document.getElementById("overlayCopyBox").style.display="none";
let emptyLogs = 0; // 0 kapag di pa tapos transac , 1 kapag done na transac //

document.getElementById("dropdownBtn").addEventListener("click", menu);

function autoResetLogs() {
const today = new Date().toDateString();
const lastReset = localStorage.getItem("lastResetDate");

if (lastReset !== today) {
localStorage.setItem("transactionLogs", JSON.stringify([]));
localStorage.setItem("lastResetDate", today);
}}

function menu() {const choices = document.getElementById("containerMenu");



if (choices.style.display === "flex"){
    choices.style.display = "none";
}
else {
choices.style.display = "flex";
}
}

function hideTransac () {
    displayTransac = document.getElementById("trackTransaction").style.display;
    if (displayTransac === "flex"){
        document.getElementById("trackTransaction").style.display = "none";
    }
    else if (displayTransac === "none"){
       document.getElementById("trackTransaction").style.display = "flex";
    }

}

function transac () {
     overlayTransac = document.getElementById("overlayTransac");
    if (overlayTransac.style.display === "flex"){
        overlayTransac.style.display = "none";
    }
    else {
       overlayTransac.style.display = "flex";
       let today = new Date().toLocaleDateString();
       document.getElementById("dateTransac").innerHTML= "Transactions as of " + today;
    
    }
    

 showTransac();
}

//function name: addTransactionToList || parameter: log //
// "list" as the name for my list lol //
function addTransactionToList(log) {
const list = document.getElementById("transactionHistory"); // calls out the ul in index.html with id "transactionHistory" //
const newLog = document.createElement("li"); // document.createElement allows us to make/add new element"//
newLog.textContent = log; //log as our parameter, the value to be posted on the list is based on log's value specifically its text value (the use of ".textContent "//
list.appendChild(newLog); //"appendChild() says that the value of newLog should be put in the container AKA the transaction history//

}

 // yung parameter is basically name ng variable natin na kapag nag function tayo dun napupunta//
 function showTransac() {
const list = document.getElementById("transactionHistory");
list. innerHTML = ""; // kaya "" kumbaga tanggal or walang laman //
const logs = JSON.parse(localStorage.getItem("transactionLogs")) || [];
// nag coconnect sa script.js at cashIn.js para pwede magpasahan ng values (ex: totalLogCI)//

logs.forEach(log => {
    const item = document.createElement("li");
    item.textContent = log;
    list.appendChild(item);

    
});



 }

autoResetLogs();

function backTransac () {
    document.getElementById("overlayCopyBox").style.display="none";

}




function confirmCopyLogs () {
    document.getElementById("overlayCopyBox").style.display="flex";
    const loggedList = document.querySelectorAll("#transactionHistory li");
    let textToCopy = '';

    loggedList.forEach((li, index) => {
        textToCopy +=`> ${li.textContent}\n\n`;
    });

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        document.getElementById("confirmTitle").innerHTML = "Success!";
        document.getElementById("confirmDate").innerHTML = "Transaction History copied to clipboard successfully.";
        
        
        
        
    })
    .catch(err => {
        console.error("Failed to copy: ", err);
    });
}

//to do monday: clear logs upon confirming and .catch message nice week bro//