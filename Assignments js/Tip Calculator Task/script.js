function calculateTip() {

const bill = parseFloat(document.getElementById("billAmount").value);
const service = parseFloat(document.getElementById("serviceQuality").value);
const people = parseInt(document.getElementById("peopleCount").value);



// const bill = document.getElementById("billAmount").value;
// const service =document.getElementById("serviceQuality").value;
// const people = document.getElementById("peopleCount").value;
// //document.getElementById("LoginEmail").value;

if (isNaN(bill) || bill <= 0) {
alert("Please enter a valid bill amount");
return;
}


if (isNaN(service)) {
alert("Please select service quality");
return;
}


if (isNaN(people) || people <= 0) {
alert("Please enter valid number of people");
return;
}


const tip = bill * service;
const total = bill + tip;
const perPerson = total / people;


document.getElementById("perPerson").innerText = perPerson.toFixed(2);
document.getElementById("resultBox").style.display = "block";
}