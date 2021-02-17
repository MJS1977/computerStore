



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
/*window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        var openDropdown;
        for (i = 0; i < dropdowns.length; {
            openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}
*/

var bankBalance = 0;
var outStandingLoan = 0;
var loan = false;
var payBalance = 0;


const elBalanceAmount = document.getElementById("balanceAmount");
const elWorkAmount = document.getElementById("workAmount");
const elOutStdText = document.getElementById("outStdText");
const elOutStdAmountd = document.getElementById("outstdAmount");


(function () {
    elOutStdText.style.visibility = "none";
    elOutStdAmountd.style.visibility = "none";
})()



function getLoan() {
    let apply = prompt("Give the sum of needed loan", "0");
    if (apply == null || apply == "") {
        txt = "User cancelled the prompt.";
    }

    if (apply < (bankBalance * 2) && loan == false) {
        bankBalance += parseInt(apply);
        console.log(bankBalance);
        outStandingLoan = apply;
        elBalanceAmount.innerHTML = bankBalance;
        elOutStdAmountd.innerHTML = outStandingLoan;
        elOutStdAmountd.style.visibility = "none";
        elOutStdText.style.visibility = "none";
        loan = true;
    }
    else {
        alert("Loan not accepted");
    }
}

function transferMoney() {

    if (outStandingLoan > 0) {
        outStandingLoan -= (payBalance * 0.1);
        console.log(outStandingLoan);
        bankBalance += payBalance * 0.9;
        payBalance = 0;
        elBalanceAmount.innerHTML = bankBalance;
        elWorkAmount.innerHTML = 0;
        elOutStdAmountd.innerHTML = outStandingLoan;
    }
    else {
        bankBalance += payBalance;
        payBalance = 0;
        elBalanceAmount.innerHTML = bankBalance;
        elWorkAmount.innerHTML = 0;
        console.log(outStandingLoan);


    }
}

function doWork() {
    payBalance += 100;
    console.log(payBalance);
    elWorkAmount.innerHTML = payBalance;
}







function test() {
    console.log("ykkönen");
}
function test2() {
    console.log("kakkonen");
}

