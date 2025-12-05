function On(){
document.getElementById("bulb").style.backgroundColor="yellow";
}
function Off(){
      document.getElementById("bulb").style.backgroundColor="white";
}
function Red(){
     document.getElementById("bulb").style.backgroundColor="red";
}
function green(){
     document.getElementById("bulb").style.backgroundColor="green";
}
function blue(){
     document.getElementById("bulb").style.backgroundColor="blue";
}
 const userColor=document.getElementById("color");
      userColor.addEventListener("change",()=> changeBulbColour(userColor.value));//arrow button
    function changeBulbColour(color){
    document.getElementById("bulb").style.backgroundColor=color;
 // userColor.addEventListener("change",changeBulbColour(userColor.value));// it will call default fumction(automatically call ho ja rha he)

 }
 function SB_Control(){
    const btn=document.getElementById("SB_btn");
    if(btn.innerText==="On"){
        document.getElementById("SB_btn").innerText="Off";
        document.getElementById("smartBulb").classList.add("on");
    }else{
        document.getElementById("SB_btn").innerText="On";
        document.getElementById("smartBulb").classList.remove("on");
    }
 }
 function SB_Control2(){
    document.getElementById("smartBulb").classList.toggle("On");
 }





 document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });
 
 document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("pink");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });
 document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Green");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });document.getElementById("c1").addEventListener("mouseenter",()=>{
     fillcolour("Violet");
 });
 document.getElementById("c1").addEventListener("mouseleave",()=>{
     fillcolour("White");
 });
 function fillcolor(color){
     console.log(color);
     document.getElementById("rainbow").style.backgroundColor=color;
 }