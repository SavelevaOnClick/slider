const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const slider = document.querySelector(".slider");
const sliderSection = document.getElementById("slider-section");
const slides = document.querySelectorAll(".slid");

function goToRight() {
  slides.forEach((slid) => {
    slid.style.order =
      parseInt(getComputedStyle(slid).order) !== 8
        ? parseInt(getComputedStyle(slid).order) + 1
        : 1;
  });
}

function goToLeft() {
  slides.forEach((slid) => {
    slid.style.order =
      parseInt(getComputedStyle(slid).order) !== 1
        ? parseInt(getComputedStyle(slid).order) - 1
        : 8;
  });
}
function adaptiveWidthOfSlidMini(slidNumber) {
  slides.forEach((item) =>
    Object.assign(item.style, {
      flexBasis: `${
        (sliderSection.offsetWidth -
          (sliderSection.offsetWidth / 100) * (slidNumber * 4 + 2)) /
        slidNumber
      }px`,
      height: `${
        (sliderSection.offsetWidth -
          (sliderSection.offsetWidth / 100) * (slidNumber * 4 + 2)) /
        slidNumber
      }px`,
    })
  );
}

function createWidthAndHeight() {
  adaptiveWidthOfSlidMini(innerWidth < 769 ? 2 : 4);
}
createWidthAndHeight();
arrowRight.addEventListener("click", (event) => goToRight());
arrowLeft.addEventListener("click", (event) => goToLeft());

window.addEventListener("resize", createWidthAndHeight);
