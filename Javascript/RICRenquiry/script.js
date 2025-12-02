function Submit(){
    console.log("Submit button Clicked");
    const pn=document.getElementById("PersonName").value;
    const cn=document.getElementById("Contact").value;
    const em=document.getElementById("Email").value;
    const qu=document.getElementById("Qualification").value;
    const sc=document.getElementById("School").value;
    const yr=document.getElementById("Year").value;
    const br=document.getElementById("Branch").value;
    console.log("PersonName:"+pn);
    console.log("Contact:" +cn);
    console.log("Email:" +em);
    console.log("Qualification:" +qu);
    console.log("school:" +sc);
    console.log("Year" +yr);
    console.log("Branch" +br);
    alert("Submission Done");  //Alert

    //clear inputs
    document.getElementById("PersonName").value="";
    document.getElementById("Contact").value="";
    document.getElementById("Email").value="";
    document.getElementById("Qualification").value="";
    document.getElementById("School").value="";
    document.getElementById("Year").value="";
    document.getElementById("Branch").value="";
}