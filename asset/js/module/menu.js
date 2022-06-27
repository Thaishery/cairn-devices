export default function menu() {
  const menu = document.getElementsByClassName("header__nav");
  const listHiden = document.getElementsByClassName("navHeader__ul--hiden");
  const listShow = document.getElementsByClassName("navHeader__ul--active");
  const menuLogoShow = document.getElementsByClassName("navHeader__nav--actif");
  const menuLogoHiden = document.getElementsByClassName(
    "navHeader__nav--hiden"
  );
  menu[0].addEventListener("click", (e) => {
    if (listHiden[0]) {
      listHiden[0].className = "navHeader__ul--active";
      menuLogoShow[0].className = "navHeader__nav--hiden";
    } else {
      listShow[0].className = "navHeader__ul--hiden";
      menuLogoHiden[0].className = "navHeader__nav--actif";
    }
  });
}
