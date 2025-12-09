function search() {
  const state = document.getElementById("State").value.trim().toLowerCase();

  if (!state) {
    alert("State Empty");
    return;
  }

  const flag = document.createElement("i");
  flag.classList.add("bi", "bi-flag-fill", "text-danger", "fs-3");
  flag.style.position = "absolute";

  
  if (state === "madhya pradesh" || state === "mp") {
    flag.style.top = "250px";
    flag.style.left = "500px";
    flag.title = "State: Madhya Pradesh \nCapital: Bhopal";
  }

   if (state === "west bengal") {
    flag.style.top = "250px";
    flag.style.left = "650px";
    flag.title = "State: West Bengal \nCapital: Kolkata";
}

if (state === "uttarakhand") {
    flag.style.top = "110px";
    flag.style.left = "500px";
    flag.title = "State: Uttarakhand \nCapital: Dehradun";
}
if (state === "andhra pradesh" || state === "ap") {
    flag.style.top = "380px";
    flag.style.left = "520px";
    flag.title = "State: Andhra Pradesh \nCapital: Amaravati";
}

else if (state === "arunachal pradesh") {
    flag.style.top = "160px";
    flag.style.left = "730px";
    flag.title = "State: Arunachal Pradesh \nCapital: Itanagar";
}

else if (state === "assam") {
    flag.style.top = "200px";
    flag.style.left = "730px";
    flag.title = "State: Assam \nCapital: Dispur";
}

 if (state === "bihar") {
    flag.style.top = "200px";
    flag.style.left = "610px";
    flag.title = "State: Bihar \nCapital: Patna";
}

 if (state === "chhattisgarh") {
    flag.style.top = "270px";
    flag.style.left = "580px";
    flag.title = "State: Chhattisgarh \nCapital: Raipur";
}

 if (state === "goa") {
    flag.style.top = "375px";
    flag.style.left = "425px";
    flag.title = "State: Goa \nCapital: Panaji";
}
 if (state === "gujarat") {
    flag.style.top = "260px";
    flag.style.left = "380px";
    flag.title = "State: Gujarat \nCapital: Gandhinagar";
}

 if (state === "haryana") {
    flag.style.top = "140px";
    flag.style.left = "480px";
    flag.title = "State: Haryana \nCapital: Chandigarh";
}

 if (state === "himachal pradesh") {
    flag.style.top = "90px";
    flag.style.left = "480px";
    flag.title = "State: Himachal Pradesh \nCapital: Shimla";
}

 if (state === "jharkhand") {
    flag.style.top = "230px";
    flag.style.left = "600px";
    flag.title = "State: Jharkhand \nCapital: Ranchi";
}

 if (state === "karnataka") {
    flag.style.top = "380px";
    flag.style.left = "450px";
    flag.title = "State: Karnataka \nCapital: Bengaluru";
}

 if (state === "kerala") {
    flag.style.top = "450px";
    flag.style.left = "450px";
    flag.title = "State: Kerala \nCapital: Thiruvananthapuram";
}
 if (state === "maharashtra") {
    flag.style.top = "310px";
    flag.style.left = "480px";
    flag.title = "State: Maharashtra \nCapital: Mumbai";
}

 if (state === "manipur") {
    flag.style.top = "230px";
    flag.style.left = "730px";
    flag.title = "State: Manipur \nCapital: Imphal";
}

 if (state === "meghalaya") {
    flag.style.top = "200px";
    flag.style.left = "710px";
    flag.title = "State: Meghalaya \nCapital: Shillong";
}

 if (state === "mizoram") {
    flag.style.top = "250px";
    flag.style.left = "730px";
    flag.title = "State: Mizoram \nCapital: Aizawl";
}

 if (state === "nagaland") {
    flag.style.top = "180px";
    flag.style.left = "750px";
    flag.title = "State: Nagaland \nCapital: Kohima";
}

 if (state === "odisha" || state === "orissa") {
    flag.style.top = "290px";
    flag.style.left = "610px";
    flag.title = "State: Odisha \nCapital: Bhubaneswar";
}

 if (state === "punjab") {
    flag.style.top = "110px";
    flag.style.left = "460px";
    flag.title = "State: Punjab \nCapital: Chandigarh";
}

 if (state === "rajasthan") {
    flag.style.top = "240px";
    flag.style.left = "420px";
    flag.title = "State: Rajasthan \nCapital: Jaipur";
}

 if (state === "sikkim") {
    flag.style.top = "170px";
    flag.style.left = "655px";
    flag.title = "State: Sikkim \nCapital: Gangtok";
}

else if (state === "tamil nadu") {
    flag.style.top = "450px";
    flag.style.left = "500px";
    flag.title = "State: Tamil Nadu \nCapital: Chennai";
}

else if (state === "telangana") {
    flag.style.top = "330px";
    flag.style.left = "500px";
    flag.title = "State: Telangana \nCapital: Hyderabad";
}

else if (state === "tripura") {
    flag.style.top = "230px";
    flag.style.left = "710px";
    flag.title = "State: Tripura \nCapital: Agartala";
}

else if (state === "uttar pradesh" || state === "up") {
    flag.style.top = "200px";
    flag.style.left = "560px";
    flag.title = "State: Uttar Pradesh \nCapital: Lucknow";
}

  
 
  document.getElementById("Map").appendChild(flag);
  document.getElementById("State").value = "";
}
