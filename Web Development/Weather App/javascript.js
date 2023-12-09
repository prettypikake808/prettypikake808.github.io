const apiKey = '0f8c9c8016ec1a97c1d2b78b22787eff'; // Replace with your own API key
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const icon = document.querySelector('.icon');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchBar.value;
  if (!searchTerm) return;
  getWeather(searchTerm);
});

async function getWeather(searchTerm) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  city.textContent = name;
  temp.textContent = `${Math.round(main.temp)}°C`;
  description.textContent = weather[0].description;
  icon.style.backgroundImage = `url('https://openweathermap.org/img/w/${weather[0].icon}.png')`;
}
