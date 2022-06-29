export default function clock() {
  const timer = document.getElementById("clock");
  let date = new Date();
  const Y = date.getFullYear();
  const M = date.getMonth() + 1; //compris entre 0 et 11 ...
  const J = date.getDate();
  const H = date.getHours();
  const Min = date.getMinutes();
  const S = date.getSeconds();
  const string =
    (J.toString().length === 2 ? J : "0" + J) +
    "/" +
    (M.toString().length === 2 ? M : "0" + M) +
    "/" +
    Y +
    "<br/> " +
    (H.toString().length === 2 ? H : "0" + H) +
    ":" +
    (Min.toString().length === 2 ? Min : "0" + Min) +
    ":" +
    (S.toString().length === 2 ? S : "0" + S);
  timer.innerHTML = string;
  setTimeout(clock, 1000);
}
