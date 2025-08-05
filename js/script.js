const API_KEY = '0c3519a13c64bc02a7574d9994949f47';

async function getWeather() {
  const city = document.getElementById('searchInput').value.trim();
  const weatherCard = document.getElementById('weatherCard');
  const error = document.getElementById('error');

  if (!city) {
    error.textContent = "Please enter a city name.";
    error.classList.remove('hidden');
    weatherCard.classList.add('hidden');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    document.getElementById('location').textContent = data.name;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = Math.round(data.main.temp);
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed} km/h`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('searchInput').value = '';
    weatherCard.classList.remove('hidden');
    error.classList.add('hidden');
  } catch (err) {
    weatherCard.classList.add('hidden');
    error.textContent = "❌ City not found or API error.";
    error.classList.remove('hidden');
  }
}
