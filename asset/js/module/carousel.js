export default function carousel() {
  const carouselsImages = document.getElementsByClassName("carouselle__image");
  const dots = document.getElementsByClassName("carouselle__botomDot");
  const rightArrow = document.getElementsByClassName("carouselle__rightArrow");
  const leftArrow = document.getElementsByClassName("carouselle__leftArrow");
  var curPos = 0;
  // console.log(carouselsImages[0]);
  if (carouselsImages[0]) {
    const timedNextSlide = setInterval(nextSlide, 10 * 1000);
  }
  if (rightArrow[0]) {
    rightArrow[0].addEventListener("click", (e) => {
      nextSlide(e);
    });
  }
  if (leftArrow[0]) {
    leftArrow[0].addEventListener("click", (e) => {
      previousSlide(e);
    });
  }
  function nextSlide(e) {
    if (e) clearInterval(timedNextSlide);
    carouselsImages[curPos].classList.remove("carouselle__image--active");
    dots[curPos].classList.remove("carouselle__botomDot--active");
    if (curPos < carouselsImages.length - 1) curPos++;
    else curPos = 0;
    carouselsImages[curPos].classList.add("carouselle__image--active");
    dots[curPos].classList.add("carouselle__botomDot--active");
  }

  function previousSlide(e) {
    if (e) clearInterval(timedNextSlide);
    carouselsImages[curPos].classList.remove("carouselle__image--active");
    dots[curPos].classList.remove("carouselle__botomDot--active");
    if (curPos > 0) curPos--;
    else curPos = carouselsImages.length - 1;
    carouselsImages[curPos].classList.add("carouselle__image--active");
    dots[curPos].classList.add("carouselle__botomDot--active");
  }
}
