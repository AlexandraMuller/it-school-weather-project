const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

let scrollToTopButton = document.querySelector(".scroll-to-top");
let halfViewportHight = window.innerHeight / 2;

document.addEventListener("scroll", function () {
  if (window.scrollY > halfViewportHight) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});

document.addEventListener("click", function () {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
});
