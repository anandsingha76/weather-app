// import React, { useEffect, useState } from 'react';
import dexter from '../assets/dexter.png';
import '../components/WeatherForecast.css';


const WeatherForecast = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [data, setData] = useState(null);
  // const [city, setCity] = useState("");
  // const API_KEY = "40e20995efa34537cc02914e1621a753";
  // apikey = "5a14e0528c6adeaf55ebac2297007ae3"


  function getWeather() {
    let city = document.getElementById('city').value
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+ "&appid=0f585a4a0236ba57daf0f5691204306a")
 .then(function(res) {
    return res.json()
    
  })
  .then(function(data) {
    console.log(data)
    function displayRes (text) {
      let text1 = document.getElementById('text')
      text1.innerText=text;
    }
    if (city === "" || data.cod==="404") 
    {
      displayRes("enter city name") //"enter city name"
    } else {
      displayRes(
      `weather details of city : ${data.name}, ${data.sys.country}
      Current Temperature : ${data.main.temp} °C
      Temperature Range : ${data.main.temp_min}°C to ${data.main.temp_max} °C
      humidity: ${data.main.humidity}`)
    }
  })
}
  
  
  return (
    <div className='app-body'>
    <div className='w-area'>
    <h1>Let&apos;s find weather in my city</h1>
    <img src={dexter} className='dex-img' alt="dexter" />

    </div>

    <div className="main-container">
      <input className='weather-input' type="text"
       placeholder='Enter City'
       name="city"
       id='city'
       onChange={getWeather}
       />

      
    </div>
    <div id="text"></div>

    </div>
  )
}

export default WeatherForecast;
