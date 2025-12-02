function Input(char) {
  if (char === "=") {
   // document.getElementById("display").value = "result";
   try{
    document.getElementById("display").vlaue=eval(
        document.getElementById("display").value
    );
   }
   catch(error){
    alert("Invalid Expression");
    document.getElementById("display").value="";
   }
   const exp=document.getElementById("display").value=eval(exp);
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
   // document.getElementById("display").value = char;
        document.getElementById("display").value=
        document.getElementById("display").value+ char;
  }
}