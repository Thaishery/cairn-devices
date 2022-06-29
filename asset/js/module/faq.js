export default function faq() {
  const question = document.getElementsByClassName("faq__question__arrow");
  const reponse = document.getElementsByClassName("faq__response");
  if (question[0]) {
    for (let i = 0; i < question.length; i++) {
      question[i].addEventListener("click", (e) => {
        if (question[i].innerText === "V") {
          reponse[i].className = "faq__response faq__response--deplier";
          question[i].innerText = ">";
        } else if (question[i].innerText === ">") {
          question[i].innerText = "V";
          reponse[i].className = "faq__response faq__response--replier";
        }
      });
    }
  }
}
