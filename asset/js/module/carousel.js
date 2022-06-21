export default function carousel(){
  const carouselsImages = document.getElementsByClassName('carouselle__item__image__container ')
  const dots = document.getElementsByClassName('carousell__iteme__botom_dot')
  const rightArrow = document.getElementsByClassName('carouselle__item__right__arrow')
  const leftArrow = document.getElementsByClassName('carouselle__item__left__arrow')
  var curPos = 0;

  setInterval(nextSlide, 10*1000)

  rightArrow[0].addEventListener("click",nextSlide)
  leftArrow[0].addEventListener("click",previousSlide)
  
  function nextSlide(){
    carouselsImages[curPos].classList.remove('--active')
    dots[curPos].classList.remove('--active')
    if(curPos < carouselsImages.length -1 ) curPos++
    else curPos = 0;
    carouselsImages[curPos].classList.add('--active')
    dots[curPos].classList.add('--active')
  }
  
  function previousSlide(){
    carouselsImages[curPos].classList.remove('--active')
    dots[curPos].classList.remove('--active')
    if(curPos > 0 ) curPos --
    else curPos = carouselsImages.length -1;
    carouselsImages[curPos].classList.add('--active')
    dots[curPos].classList.add('--active')
  }
}