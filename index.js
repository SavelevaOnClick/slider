const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const slider = document.querySelector(".slider");

function goToRight() {
  Array.from(document.querySelectorAll(".slid")).forEach((slid) => {
    slid.style.order =
      +getComputedStyle(slid).order !== 8
        ? +getComputedStyle(slid).order + 1
        : 1;
  });
}

function goToLeft() {
  Array.from(document.querySelectorAll(".slid")).forEach((slid) => {
    slid.style.order =
      +getComputedStyle(slid).order !== 1
        ? +getComputedStyle(slid).order - 1
        : 8;
  });
}

arrowRight.addEventListener("click", (event) => goToRight());
arrowLeft.addEventListener("click", (event) => goToLeft());
