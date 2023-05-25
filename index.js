const API_KEY = 'ZsZLeAaCbDiosbI2g1jiI3BYahv2btDZIAnP8jVT'
const date = document.getElementById('date')
const form = document.getElementById('form')
const image = document.getElementById('mars-img')
let chosenDate

date.onchange = (e) => {
  chosenDate = e.target.value
}

form.onsubmit = (e) => {
  e.preventDefault()
  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${chosenDate}&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.photos.length)
      let photo = data.photos[randomNum].img_src
      image.setAttribute('src', photo)
      image.classList.remove('hidden')
      image.classList.add('flex')
    })
}
