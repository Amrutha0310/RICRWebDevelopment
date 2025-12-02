
  const userColor = document.getElementById("color");
  userColor.addEventListener("change", () => changeBgcolor(userColor.value)); //arrow function
  function changeBgcolor(color) {
    document.getElementById("box2").style.backgroundColor = color;
  }



  const userColor2 = document.getElementById("color2");
  userColor2.addEventListener("change", () => changehcolor(userColor2.value)); //arrow function
  function changehcolor(color2) {
    document.getElementById("H1").style.color = color2;
  }


  const userColor3 = document.getElementById("color3");
  userColor3.addEventListener("change", () => changepcolor(userColor3.value)); //arrow function
  function changepcolor(color3) {
    document.getElementById("p").style.color = color3;
  }

