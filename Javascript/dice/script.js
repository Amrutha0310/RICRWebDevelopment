function start(){
    console.log("Game Started");
    document.getElementById("btn1").disabled=false;
    document.getElementById("btnr").disabled=false;
    document.getElementById("btns").disabled=true;
}
function restart(){
    console.log("Game restarted");
    window.location.reload();
}
function p1Play(){
    console.log("Player 1 is playing");
    let score=Number(document.getElementById("score1").innerText);
    const DF=Math.floor(Math.random()*6) + 1;
    
    if(DF===6){
       document.getElementById(btn1).disabled=false;
       document.getElementById(btn2).disabled=true;
    }else{
        score=score +DF;
         document.getElementById("score1").innerText=score;
    }
   
}
function p2Play(){
    console.log("Player 2 is playing");
    let score=Number(document.getElementById("score2").innerText);
    const DF=Math.floor(Math.random()*6) + 1;
    if(DF===6){
       document.getElementById(btn1).disabled=false;
       document.getElementById(btn2).disabled=true;
    }else{
        score=score +DF;
         document.getElementById("score2").innerText=score;
    }
}