const currentCityTag = document.querySelector(".current-city");
const bgImageElement = document.querySelector(".bg-image-sky");
const startTextAnimation = document.querySelector(".start-text");
let currentCity = localStorage.getItem("city");

// Imagine de fundal start
window.addEventListener("scroll", function () {
  bgImageElement.style.opacity = 1 - this.window.scrollY / 900;
});

// Text start
const textContainer = [
  "soare",
  "noros",
  "frig",
  "cald",
  "ceață",
  "ploios",
  "vânt",
  "zapadă",
];
let textContainerIndex = 0;
let textCharacterIndex = 0;
updateStartText();
function updateStartText() {
  textCharacterIndex++;
  startTextAnimation.innerHTML = `<h1> Oare e ${textContainer[
    textContainerIndex
  ].slice(0, textCharacterIndex)} ?</h1>
  <p>Scrollează pentru a afla!</p>`;

  if (textCharacterIndex === textContainer[textContainerIndex].length) {
    textContainerIndex++;
    textCharacterIndex = 0;
  }

  if (textContainerIndex === textContainer.length) {
    textContainerIndex = 0;
  }
  setTimeout(updateStartText, 300);
}

// Orasul curent
if (!currentCity) {
  localStorage.setItem("city", "Timișoara");
  currentCity = "Timișoara";
}

currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

// Butonul scroll to top
let scrollToTopButton = document.querySelector(".scroll-to-top");
let viewportHight = (window.innerHeight * 3) / 2;

document.addEventListener("scroll", function () {
  if (window.scrollY > viewportHight) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 727,
    left: 100,
    behavior: "smooth",
  });
});
