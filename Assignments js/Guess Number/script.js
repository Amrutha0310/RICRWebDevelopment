
// Random number 
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Card hover effect using mouse events
// const card = document.getElementById("gameCard");

// card.addEventListener("mouseover", () => {
//   card.style.transform = "scale(1.05)";
//   card.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.3)";
// });

// card.addEventListener("mouseout", () => {
//   card.style.transform = "scale(1)";
//   card.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.2)";
// });


// Guess logic
function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);

  if (!userGuess || userGuess < 1 || userGuess > 10) {
    alert("Please enter a number between 1 and 10");
    return;
  }

  if (userGuess > randomNumber) {
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER");
  } 
  else if (userGuess < randomNumber) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER");
  } 
  else {
    alert("CONGRATULATIONS! YOU GUESSED THE RIGHT NUMBER!");
  }
}
