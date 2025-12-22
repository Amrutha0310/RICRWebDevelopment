async function getWeather() {
  const city = document.getElementById("city").value.trim();
   if(city === "") {  
     alert('Please Select any state!!');
        return;
         }
  

  const { lat, lon } = await getGeoLoc(city);
 

console.log(lat,lon);


  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ba65e850bca64a01ba647e359e28e9a`
  );

  const data = await response.json();
  document.getElementById("WeatherData").innerHTML = `
    <div>
        <p>Temperature : ${(data.main.temp -273.14).toFixed(2)}℃</p>
      <p>Humdidty : ${data.main.humidity}%</p>
      <p>Description : ${data.weather[0].description}</p>
      </div>
      <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="WeatherIcon" >
 
 `;
}

async function getGeoLoc(City) {
  console.log(City);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=7ba65e850bca64a01ba647e359e28e9a`
  );
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon }; //json only with key  // Latitude:lat-> can also write
}
 