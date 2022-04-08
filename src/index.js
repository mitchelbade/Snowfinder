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

  fetch(`${weatherapi.url}weather?q=${location}&units=imperial&appid=${weatherapi.key}`)
    .then(weather => weather.json())
    .then(coords)
}

const input = (event) => {
  event.preventDefault()

  const location = event.target.querySelector('input').value
  getWeather(location)
}

const displayWeather = (weather) => {

  const info = document.querySelector('.weatherinfo')
  info.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/> <br> Temp: ${weather.main.temp}°, Description: ${weather.weather[0].main}, Wind: ${weather.wind.speed}mph <br> Details: ${weather.weather[0].description}`
  
  const header = document.querySelector('.header')
  header.innerHTML = ""

  const today = new Date()
  const date = document.querySelector('.date')
  date.innerHTML = today.toDateString()
}

const coords = (weather) => {
  const button = document.querySelector('.coords')

  button.addEventListener('click', () => {
    alert(`Longitude: ${weather.coord.lon} Latitude: ${weather.coord.lat}`)
  })
}