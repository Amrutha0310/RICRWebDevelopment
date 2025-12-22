function calculateBill() {
  const units = parseInt(document.getElementById("units").value);

  if (isNaN(units) || units < 0) {
    alert("Please enter a valid positive number of units");
    return;
  }

  let u1 = 0, u2 = 0, u3 = 0, u4 = 0;
  let c1 = 0, c2 = 0, c3 = 0, c4 = 0;

  if (units <= 50) {
    u1 = units;
  } else if (units <= 200) {
    u1 = 50;
    u2 = units - 50;
  } else if (units <= 450) {
    u1 = 50;
    u2 = 150;
    u3 = units - 200;
  } else {
    u1 = 50;
    u2 = 150;
    u3 = 250;
    u4 = units - 450;
  }

  c1 = u1 * 0.50;
  c2 = u2 * 0.75;
  c3 = u3 * 1.20;
  c4 = u4 * 1.50;

  const subtotal = c1 + c2 + c3 + c4;
  const surcharge = subtotal * 0.20;
  const total = subtotal + surcharge;

  document.getElementById("billDetails").innerHTML = `
    <p>First 50 Units (${u1}) : ₹${c1.toFixed(2)}</p>
    <p>Next 150 Units (${u2}) : ₹${c2.toFixed(2)}</p>
    <p>Next 250 Units (${u3}) : ₹${c3.toFixed(2)}</p>
    <p>Above 450 Units (${u4}) : ₹${c4.toFixed(2)}</p>
    <hr>
    <p>Subtotal : ₹${subtotal.toFixed(2)}</p>
    <p>Surcharge (20%) : ₹${surcharge.toFixed(2)}</p>
    <hr>
    <p class="total">Grand Total : ₹${total.toFixed(2)}</p>
  `;

  document.getElementById("resultCard").classList.remove("d-none");
}

function resetBill() {
  document.getElementById("billForm").reset();
  document.getElementById("resultCard").classList.add("d-none");
}
