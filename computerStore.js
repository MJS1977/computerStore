


//toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        var openDropdown;
        for (i = 0; i < dropdowns.length; i++) {
            openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//declare variables
var bankBalance = 0;
var outStandingLoan = 0;
var loan = false;
var bought = false;
var payBalance = 0;

//make computer objects
var computer1 = { Features: "i7 processor\n M.2 hard-drive\n bulletproof", infoImage: "laptop1.jpg", infoHeader: "Hp battlefield 911", infoText: "No matter where you are\n at home or at the warzone\n this is your choice", infoValue: "1500€" }
var computer2 = { Features: "i5 processor\n SSD hard-drive\n for school", infoImage: "laptop2.jpg", infoHeader: "Hp student XC", infoText: "Perfect for school enviroment\n with office 365 included\n and it is lightweight", infoValue: "1000€" }
var computer3 = { Features: "Pentium processor\n Floppy disk\n waterproof", infoImage: "laptop3.jpg", infoHeader: "Hp senior", infoText: "Perfect for old people\n at the senior home\n It has a GPS locationing!", infoValue: "500€" }
var laptops = [];

//add objects to array
laptops.push(computer1, computer2, computer3);

//get elements
const elBalanceAmount = document.getElementById("balanceAmount");
const elWorkAmount = document.getElementById("workAmount");
const elOutStdText = document.getElementById("outStdText");
const elOutStdAmountd = document.getElementById("outStdAmount");
const elRepay = document.getElementById("rePay");
const eLFeatures = document.getElementById("features");
const elPage = document.getElementById("page");

//hide certain fields
elOutStdText.style.visibility = "hidden";
elOutStdAmountd.style.visibility = "hidden";
elRepay.style.visibility = "hidden";


//get loan method 
function getLoan() {
    let apply = prompt("Give the sum of needed loan", "0"); //get the sum from the user
    if (apply == null || apply == "") {
        txt = "User cancelled the prompt.";
    }

    //check that the conditions to get the loan are ok
    if (apply <= (bankBalance * 2) && loan == false && bought == false) {
        bankBalance += parseInt(apply);
        outStandingLoan = apply;
        elBalanceAmount.innerHTML = bankBalance;
        elOutStdAmountd.innerHTML = outStandingLoan;
        elOutStdAmountd.style.visibility = "inherit";
        elOutStdText.style.visibility = "inherit";
        elRepay.style.visibility = "inherit";
        loan = true;
        bought = true;
    }
    else {
        alert("Loan not accepted");
    }
}

//method to transfer money to the bank account
function transferMoney() {

    if (outStandingLoan > 0) { //check if loan exists

        bankBalance += payBalance * 0.9;
        let temp = payBalance * 0.1;

        if (outStandingLoan < temp) { //check if loan payment is bigger than the loan

            bankBalance += temp - outStandingLoan;
            outStandingLoan = 0;
            loan = false;
            elOutStdText.style.visibility = "hidden";
            elOutStdAmountd.style.visibility = "hidden";
            elRepay.style.visibility = "hidden";
        }

        else if (outStandingLoan > temp) { //if amount is smaller

            outStandingLoan -= temp;
        }

        else if (outStandingLoan == temp) { //if the same

            outStandingLoan = 0;
            loan = false;
            elOutStdText.style.visibility = "hidden";
            elOutStdAmountd.style.visibility = "hidden";
            elRepay.style.visibility = "hidden";
        }

        payBalance = 0;
        elBalanceAmount.innerHTML = bankBalance;
        elWorkAmount.innerHTML = payBalance;
        elOutStdAmountd.innerHTML = outStandingLoan;
    }

    else if (outStandingLoan == 0) { //if loan amount is zero
        bankBalance += payBalance;
        payBalance = 0;
        elBalanceAmount.innerHTML = bankBalance;
        elWorkAmount.innerHTML = 0;
        loan = false;
        elOutStdText.style.visibility = "hidden";
        elOutStdAmountd.style.visibility = "hidden";
        elRepay.style.visibility = "hidden";
    }
}

//make money method
function doWork() {
    payBalance += 100;
    console.log(payBalance);
    elWorkAmount.innerHTML = payBalance;
}

//pay the loan directly method
function rePay() {

    if (outStandingLoan > payBalance) {
        outStandingLoan -= payBalance;
        payBalance = 0;
        elWorkAmount.innerHTML = payBalance;
        elOutStdAmountd.innerHTML = outStandingLoan;
    }

    else {
        payBalance -= outStandingLoan;
        outStandingLoan = 0;
        elWorkAmount.innerHTML = payBalance;
        elOutStdAmountd.innerHTML = outStandingLoan;
        loan = false;
        elOutStdText.style.visibility = "hidden";
        elOutStdAmountd.style.visibility = "hidden";
        elRepay.style.visibility = "hidden";
    }
}

//method for showing the laptops
function laptop(value) {

    //check if elements allready exist, if they do then delete them
    var test = document.getElementById("info");
    if (typeof (test) != 'undefined' && test != null) {
        test.remove();
    }

    //get the selected laptop
    currentLaptop = laptops[value];
    eLFeatures.innerHTML = currentLaptop.Features;  //show laptop features text

    //create elements and define their css
    var infoBox = document.createElement("DIV");
    infoBox.style.cssText = "position:absolute;border-radius:10px;width:50%;height:200px;margin-top: 30px;z-index:100;background-color: rgb(241, 241, 241)";
    infoBox.setAttribute("id", "info");
    elPage.appendChild(infoBox);

    var img = document.createElement("img");
    img.src = currentLaptop.infoImage;
    img.style.cssText = "position:absolute;top: 25px;left: 50px;"
    img.width = 150;
    img.height = 150;
    infoBox.appendChild(img);

    var infoHeader = document.createElement("h3");
    var headerText = document.createTextNode(currentLaptop.infoHeader);
    infoHeader.style.cssText = "position: absolute; left: 250px;"
    infoHeader.appendChild(headerText);
    infoBox.appendChild(infoHeader);

    var infoPrice = document.createElement("h3");
    var priceText = document.createTextNode("Price: " + currentLaptop.infoValue);
    infoPrice.style.cssText = "position: absolute; left: 250px;top: 100px;"
    infoPrice.append(priceText);
    infoBox.appendChild(infoPrice);

    var infoPara = document.createElement("p");
    var paraText = document.createTextNode(currentLaptop.infoText);
    infoPara.style.cssText = "position: absolute; left: 250px;top: 40px;"
    infoPara.appendChild(paraText);
    infoBox.appendChild(infoPara);

    var btn = document.createElement("button");
    btn.innerHTML = "BUY";
    btn.style.cssText = "position: absolute; left:250px; top:155px;"
    infoBox.appendChild(btn);
    btn.onclick = function buy() {  //when button is pressed, buy the laptop

        if (bankBalance >= parseInt(currentLaptop.infoValue)) {
            bankBalance -= parseInt(currentLaptop.infoValue);
            bought = false;
            elBalanceAmount.innerHTML = bankBalance;
            alert("Thanks for shopping!");
        }

        else {
            alert("Not enough funds!")
        }
    }
}