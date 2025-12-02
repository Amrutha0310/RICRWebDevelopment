function Login(){
    console.log("login button Clicked");
    const em=document.getElementById("LoginEmail").value;
    const ps=document.getElementById("LoginPassword").value;
    console.log("Email:"+em);
    console.log("Password:" +ps);
    alert("login Done");
    document.getElementById("LoginEmail").value="";
    document.getElementById("LoginPassword").value="";
}
function registration(){
  console.log("Registration Button Clicked");
  const nm=document.getElementById("RegistrationName").value;
  const mn=document.getElementById("RegistratioEmail").value;
  const p1=document.getElementById("RegistartionCrPassword").value;
  const p2=document.getElementById("RegistrationCfPassword").value;
   console.log("Name:"+nm);
   console.log("email:"+mn);
   console.log("Password:"+p1);
   console.log("Password2:"+p2);
   document.getElementById("RegistrationName").value="";
   document.getElementById("RegistrationEmail").value="";
   document.getElementById("RegistrationCrPassword").value="";
   document.getElementById("RegistrationCfPassword").value="";
}