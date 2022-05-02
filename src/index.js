// API of choice ----- https://api.openweathermap.org

const weatherapi = {
  key: "ab4b9fcf3a1e643de2f38efbe5ae6817",
  url: "https://api.openweathermap.org/data/2.5/"
}

window.addEventListener('DOMContentLoaded', () => {
  const locationForm = document.querySelector('form')
  locationForm.addEventListener('submit', input)
})

const getWeather = (location) => {
  fetch(`${weatherapi.url}weather?q=${location}&units=imperial&appid=${weatherapi.key}`)
    .then(weather => weather.json())
    .then(displayWeather)
}

const input = (event) => {
  event.preventDefault()
  
  const location = document.querySelector('input').value
  getWeather(location)
  document.querySelector('input').value = "";
}

const displayWeather = (weather) => {
  const info = document.querySelector('.weatherinfo')
  info.innerHTML = ` <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/> <br> <h3>${weather.name}</h3> <p>Temp: ${weather.main.temp}°, Description: ${weather.weather[0].main}, Wind: ${weather.wind.speed}mph</p> <p>Details: ${weather.weather[0].description}<p>`
  
  const header = document.querySelector('.header')
  header.innerHTML = ""
  
  const today = new Date()
  const date = document.querySelector('.date')
  date.innerHTML = `<p>${today.toDateString()}</p>`

  const div = document.querySelector('.coords')
  div.innerHTML = `<button class="coords-button w3-button w3-white w3-padding-large w3-round w3-large">Coords</button>`
  const coords = `${weather.name} - Longitude: ${weather.coord.lon} Latitude: ${weather.coord.lat}`
  document.querySelector('.coords-button').addEventListener('click', () => {alert(coords)})
}