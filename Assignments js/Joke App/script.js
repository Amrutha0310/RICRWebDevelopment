async function GetNewJoke() {
  const setupEl = document.getElementById("setup");
  const punchlineEl = document.getElementById("punchline");

  setupEl.innerText = "Loading joke...";
  punchlineEl.innerText = "";

  const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
  const data = await response.json();

  setupEl.innerText = data.setup;
  punchlineEl.innerText = data.punchline;
}
