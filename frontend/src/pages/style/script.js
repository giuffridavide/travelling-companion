const cityCards = document.querySelectorAll('.city-card');
const selectedCities = document.getElementById('selected-cities');

cityCards.forEach(card => {
	card.addEventListener('click', () => {
		const cityName = card.dataset.city;
		selectedCities.value += cityName + ', ';
	});
});





const cityInput = document.querySelector("#city-input");
const cityList = document.querySelector("#city-list");

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose"
];

function showCities() {
    const input = cityInput.value.toLowerCase();
    const matchedCities = cities.filter(city => city.toLowerCase().startsWith(input));
    cityList.innerHTML = "";
    matchedCities.forEach(city => {
      const link = document.createElement("a");
      link.textContent = city;
      link.href = "#";
      link.addEventListener("click", () => {
        cityInput.value = city;
        cityList.classList.remove("show");
      });
      cityList.appendChild(link);
    });
    if (matchedCities.length > 0) {
      cityList.classList.add("show");
    } else {
      cityList.classList.remove("show");
    }
  }

cityInput.addEventListener("input", showCities);