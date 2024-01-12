const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const cluj = document.querySelector(".dropdown-menu .cluj");
const craiova = document.querySelector(".dropdown-menu .craiova");
const brasov = document.querySelector(".dropdown-menu .brasov");
const constanta = document.querySelector(".dropdown-menu .constanta");
const piatraNeamt = document.querySelector(".dropdown-menu .piatra-neamt");
const satuMare = document.querySelector(".dropdown-menu .satu-mare");
const deva = document.querySelector(".dropdown-menu .deva");
const targuJiu = document.querySelector(".dropdown-menu .targu-jiu");
const iasi = document.querySelector(".dropdown-menu .iasi");
const suceava = document.querySelector(".dropdown-menu .suceava");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
cluj.addEventListener("click", function () {
  updateWeather("Cluj");
});
craiova.addEventListener("click", function () {
  updateWeather("Craiova");
});
brasov.addEventListener("click", function () {
  updateWeather("Brașov");
});
constanta.addEventListener("click", function () {
  updateWeather("Constanța");
});
piatraNeamt.addEventListener("click", function () {
  updateWeather("Piatra Neamț");
});
satuMare.addEventListener("click", function () {
  updateWeather("Satu Mare");
});
deva.addEventListener("click", function () {
  updateWeather("Deva");
});
targuJiu.addEventListener("click", function () {
  updateWeather("Târgu Jiu");
});
iasi.addEventListener("click", function () {
  updateWeather("Iași");
});
suceava.addEventListener("click", function () {
  updateWeather("Suceava");
});
