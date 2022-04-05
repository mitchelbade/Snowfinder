// Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

// Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

// Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

// Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

// Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.





// API of choice ----- https://api.openweathermap.org
// Building app looking for snow
// check against location to find if the weather is cold enough to potentially have snow

// const random = function (){
//   const images = [
//     'images/mountain.jpg',
//     'images/mountains.jpg',
//     'images/rainymountain.jpg'
//   ]
//   return images[Math.floor(Math.random() * images.length)];
// }

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
    .then(historyButton)
}

const input = (event) => {
  event.preventDefault()

  // console.log('submit')
  // console.log(event.target.querySelector('input').value)

  const location = event.target.querySelector('input').value
  getWeather(location)
}

const displayWeather = (weather) => {

  //console.log(weather)

  const info = document.querySelector('.weatherinfo')
  info.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/> <br> Temp: ${weather.main.temp}°, Description: ${weather.weather[0].main}, Wind: ${weather.wind.speed}mph <br> Details: ${weather.weather[0].description}`
  
  const header = document.querySelector('.header')
  header.innerHTML = ""

  const today = new Date()
  const date = document.querySelector('.date')
  date.innerHTML = today.toDateString()
}

const historyButton = (weather) => {

  //console.log(weather)

  const button = document.querySelector('.historybutton')
  const location = document.querySelector('input').value

  let historyArr = []
  historyArr.push(`Location: ${location}, Temp: ${weather.main.temp}°`)

  console.log(historyArr)

  button.addEventListener('click', () => {
    alert(historyArr)
  })
}

// const dateBuilder = function(d){
//   const months = ["January", "February", "March", "April", "May", "June", "July", 
//   "August", "September", "October", "November", "December"]
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
//   "Friday", "Saturday"]
//   const day = days[d.getDay()]
//   const date = d.getDate()
//   const month = months[d.getMonth()]
//   const year = d.getFullYear()
//   return `${day}, ${date} ${month}, ${year}`
// }