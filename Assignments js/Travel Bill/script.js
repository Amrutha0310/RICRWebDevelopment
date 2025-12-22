function calculateBill() {
  const kmInput = document.getElementById("km").value;
  const error = document.getElementById("error");
  const resultCard = document.getElementById("resultCard");

  error.classList.add("d-none");
  resultCard.classList.add("d-none");

  const km = parseFloat(kmInput);

  // Validation for proper
  if (kmInput === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometres";
    error.classList.remove("d-none");
    return;
  }

  // cal
  let s1 = 0, s2 = 0, s3 = 0;
  let c1 = 0, c2 = 0, c3 = 0;

  if (km <= 10) {
    s1 = km;
  } else if (km <= 50) {
    s1 = 10;
    s2 = km - 10;
  } else {
    s1 = 10;
    s2 = 40;
    s3 = km - 50;
  }

  // Charges
  c1 = s1 * 11;
  c2 = s2 * 10;
  c3 = s3 * 9;

  const total = c1 + c2 + c3;

  // Display
  document.getElementById("total").innerText =
    total.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  document.getElementById("breakdown").innerHTML = `
    <p>${s1.toFixed(2)} km × ₹11 = ₹${c1.toFixed(2)}</p>
    <p>${s2.toFixed(2)} km × ₹10 = ₹${c2.toFixed(2)}</p>
    <p>${s3.toFixed(2)} km × ₹9 = ₹${c3.toFixed(2)}</p>
  `;

  resultCard.classList.remove("d-none");
}
