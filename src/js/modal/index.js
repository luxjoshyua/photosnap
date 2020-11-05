const circleSlide = document.querySelector(".inner-circle");
const sliderBg = document.querySelector(".slider-wrapper");
const monthyEl = document.querySelector(".pricing-tiles-monthly");
const yearlyEl = document.querySelector(".pricing-tiles-yearly");

// add event listener to the circle slide
circleSlide.addEventListener("click", (e) => {
  if (!circleSlide.classList.contains("active-circle")) {
    circleSlide.classList.add("active-circle");
    circleSlide.classList.remove("inactive-circle");
    sliderBg.classList.add("active-bg");
    monthyEl.classList.add("inactive-monthly");
    yearlyEl.classList.add("active-yearly");
  } else {
    circleSlide.classList.remove("active-circle");
    circleSlide.classList.add("inactive-circle");
    sliderBg.classList.remove("active-bg");
    monthyEl.classList.remove("inactive-monthly");
    yearlyEl.classList.add("inactive-yearly");
    yearlyEl.classList.remove("active-yearly");
  }
});
