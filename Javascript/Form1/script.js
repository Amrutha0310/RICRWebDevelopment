function Submit(){
    const nm=document.getElementById("name").value.trim();
    const em=document.getElementById("email").value.trim();
    const ph=document.getElementById("phone").value.trim();
    const db=document.getElementById("dob").value.trim();


//validation
if(!/^[A-Za-z ]+$/.test(nm)){   //Regular Expression
   alert("Wrong Input");
  return;
 } 
//  if(!/^[\w.]+@gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)){
    //  alert("Wrong Email");
    //  return;
 
  
   





 const data={
    FullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
};
console.log(data);

}

 

    
 

      


 
   
 





