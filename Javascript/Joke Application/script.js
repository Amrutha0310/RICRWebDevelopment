async function GetNewJoke() {
  // not readable form
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  ); //fetch() function
  //console.log(response);

  //converting readable form
  const data = await response.json();
  //   console.log(data);
  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;
}
