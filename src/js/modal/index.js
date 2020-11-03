const circleSlide = document.querySelector(".inner-circle");
const sliderBg = document.querySelector(".slider-wrapper");

// add event listener to the circle slide
circleSlide.addEventListener("click", (e) => {
  circleSlide.classList.toggle("active-circle");
  sliderBg.classList.toggle("active-bg");
  // when the user clicks, fade out pricing tiles monthly, fade in pricing tiles yearly
});
