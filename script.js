const temp  = document.getElementById("temperature")
const city = document.getElementById("city")
const humidity_value = document.getElementById("humidity")
const windspeed_value = document.getElementById("windspeed")


const btnClick = document.getElementById("btn");
btnClick.addEventListener("click", 

function () 
{
  const input_text = document.getElementById("input").value;

  if (input_text !== "") 
  {
    fetchWeather(input_text);
  } 
  
  else 
  {
    console.log("ERROR");
  }
});

async function fetchWeather(city_name) 
{
  const api_key = "cc8dc01ac7352e9a05877867b4288c8c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

  const weatherData = await fetch(url).then((response) => response.json());

  // console.log(weatherData);

  console.log(weatherData.main.temp);
  temp.innerText = `${Math.round(weatherData.main.temp - 273.15)}°C`
  
  console.log(weatherData.name);
  city.innerText = `${weatherData.name}`

  console.log(weatherData.main.humidity);
  humidity_value.innerText = `${weatherData.main.humidity}%`

  console.log(weatherData.wind.speed);
  windspeed_value.innerText = `${weatherData.wind.speed}km/hr`

}
