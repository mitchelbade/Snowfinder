// API of choice ----- https://api.openweathermap.org

const weatherapi = {
  //object holding API info.
  key: "ab4b9fcf3a1e643de2f38efbe5ae6817",
  url: "https://api.openweathermap.org/data/2.5/"
}

window.addEventListener('DOMContentLoaded', () => {
  //event listener waiting dom to load and adding a submit event listener to my form
  const locationForm = document.querySelector('form')
  locationForm.addEventListener('submit', input)
})

const getWeather = (location) => {
  //taking in location from input function fetching the api converting the returned promise to json
  fetch(`${weatherapi.url}weather?q=${location}&units=imperial&appid=${weatherapi.key}`)
    .then(weather => weather.json())
    .then(displayWeather)

  // fetch(`${weatherapi.url}weather?q=${location}&units=imperial&appid=${weatherapi.key}`)
  //   .then(weather => weather.json())
  //   .then(coords)
}

const input = () => {
  //preventing DOM refresh invoking getWeather on submit
  event.preventDefault()

  const location = document.querySelector('input').value
  getWeather(location)
}

const displayWeather = (weather) => {
  //formatting information using the info returned from the API added images that update depending on location.
  const info = document.querySelector('.weatherinfo')
  info.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/> <br> Temp: ${weather.main.temp}°, Description: ${weather.weather[0].main}, Wind: ${weather.wind.speed}mph <br> Details: ${weather.weather[0].description}`
  
  const header = document.querySelector('.header')
  header.innerHTML = ""
  
  //added date
  const today = new Date()
  const date = document.querySelector('.date')
  date.innerHTML = today.toDateString()

  //this is an event listener for my coordinates button so you can double check the exact location incase the api pulls the wrong one.
  const button = document.querySelector('.coords')
  const coords = `${weather.name} - Longitude: ${weather.coord.lon} Latitude: ${weather.coord.lat}`
  //unable to figure out how to prevent the alert from pulling all the previous searches.
  button.addEventListener('click', () => {alert(coords)})
}

// const coords = (weather) => {
//   const button = document.querySelector('.coords')
//   const coords = `Longitude: ${weather.coord.lon} Latitude: ${weather.coord.lat}`
//   button.addEventListener('click', () => {alert(coords)})
// }