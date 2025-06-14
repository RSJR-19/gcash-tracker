


document.getElementById("trackTransaction").style.display ="flex";
document.getElementById("overlayTransac").style.display ="none";

document.getElementById("dropdownBtn").addEventListener("click", menu);

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
    


}

