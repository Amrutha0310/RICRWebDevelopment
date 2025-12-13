function calculateAge() {

  let dob = document.getElementById("dob").value;
  let currentDate = document.getElementById("currentDate").value;
  let result = document.getElementById("result");

    if (dob === "" || currentDate === "") {  
     alert('Please select both dates Properly!!');
        return;
         }



        
  //  if (dob === "" || currentDate === "") {   // check  dates 
  //   result.classList.remove("d-none");
  //   result.innerHTML = "Please select both dates";
  //   result.style.color = "red";
  //   return;
  //   }

  let birthYear = new Date(dob).getFullYear();
  let currentYear = new Date(currentDate).getFullYear();

  let age = currentYear - birthYear;

 
  result.classList.remove("d-none");    // show result
  result.style.color = "blue";
  result.innerHTML = "Your age is " + age + " years.";
}
