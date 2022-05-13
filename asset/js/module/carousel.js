export default function carousel(){
  const carouselsItems = document.getElementsByClassName('carousel__item')
  const rightArrow = document.getElementsByClassName('carouselle__item__right__arrow')
  const leftArrow = document.getElementsByClassName('carouselle__item__left__arrow')
  
  for(let i = 0; i< rightArrow.length; i++){
    rightArrow[i].addEventListener('click',function(){mouveCarouselRight(i)})
  }
  for(let i = rightArrow.length-1; i >= 0; i --){
    leftArrow[i].addEventListener('click',function(){mouveCarouselLeft(i)})
  }
  function mouveCarouselRight(curentItem){
    carouselsItems[curentItem].className = "carousel__item carousel__item--disactive"
    if(curentItem === (carouselsItems.length-1)){
      carouselsItems[0].className = "carousel__item carousel__item--active"
    }else{
    carouselsItems[curentItem+1].className = "carousel__item carousel__item--active"
    }
  }
  function mouveCarouselLeft(curentItem){
    carouselsItems[curentItem].className = "carousel__item carousel__item--disactive"
    if(curentItem === 0){
      carouselsItems[carouselsItems.length-1].className = "carousel__item carousel__item--active"
    }else{
    carouselsItems[curentItem-1].className = "carousel__item carousel__item--active"
    }
  }
}