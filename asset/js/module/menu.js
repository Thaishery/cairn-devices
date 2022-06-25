export default function menu(){
  const menu = document.getElementsByClassName("header__burger")
  const listHiden = document.getElementsByClassName("header__burger__list_hiden")
  const listShow = document.getElementsByClassName("header__burger__list_active")
  const menuLogoShow = document.getElementsByClassName("header__burger__drawer_actif")
  const menuLogoHiden = document.getElementsByClassName("header__burger__drawer_hiden")

  menu[0].addEventListener("click",(e)=>{
    if(listHiden[0]){
    listHiden[0].className = "header__burger__list_active"
    menuLogoShow[0].className = "header__burger__drawer_hiden"
    }else{
      listShow[0].className = "header__burger__list_hiden"
      menuLogoHiden[0].className = "header__burger__drawer_actif"
    }
  })
}