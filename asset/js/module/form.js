export default function form() {
  const regexList = {
    email: new RegExp(
      /([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})/g
    ),
    text: new RegExp(/[a-zA-Z0-9 ]/g),
    textarea: new RegExp(/[a-zA-Z0-9 ]/g),
  };
  const error = {
    email: "Votre email est invalide",
    text: "Les donnée doivent contenir uniquement des lettres",
    textarea: "les données doivent contenir uniquement des lettres",
    number: "les données doivent contenir uniquement des chiffres",
  };
  const labels = document.getElementsByClassName("formulaire__label");
  const inputs = document.getElementsByClassName("formulaire__input");
  const errors = document.getElementsByClassName("formulaire__error");
  const form = document.getElementsByClassName("formulaire");
  const addField = document.getElementById("addField");
  form[0].addEventListener("submit", (e) => {
    e.preventDefault();
    //on traite le formulaire ici... (call api par exemple, dans le cas d'un form php pas d'évenement sur le form ... )
    console.log(e);
  });
  addField.addEventListener("click", (e) => {
    e.preventDefault();
    let newLabel = document.createElement("lable");
    let newBr = document.createElement("br");
    let newInput = document.createElement("input");
    let newError = document.createElement("p");
    newLabel.innerText = "Votre question : ";
    newInput.type = "text";
    newError.classList = "formulaire__error formulaire__error--inactive";
    form[0].appendChild(newLabel);
    form[0].appendChild(newError);
    form[0].appendChild(newBr);
    form[0].appendChild(newInput);
    newInput.addEventListener("change", (e) => {
      var value = e.target.value;
      if (value.match(regexList[newInput.type]) === null) {
        newInput.classList = "formulaire__input formulaire__input--invalid";
        newError.classList = "formulaire__error formulaire__error--active";
        newError.innerText = error[newInput.type];
      } else if (
        value.match(regexList[newInput.type]).length !== value.length &&
        newInput.type !== "email"
      ) {
        newInput.classList = "formulaire__input formulaire__input--invalid";
        newError.classList = "formulaire__error formulaire__error--active";
        newError.innerText = error[newInput.type];
      } else {
        newInput.classList = "formulaire__input formulaire__input--valid";
        newError.innerText = "";
        newError.classList = "formulaire__error formulaire__error--inactive";
      }
    });
  });
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", (e) => {
      var value = e.target.value;
      if (value.match(regexList[inputs[i].type]) === null) {
        inputs[i].classList = "formulaire__input formulaire__input--invalid";
        errors[i].classList = " formulaire__error formulaire__error--active";
        errors[i].innerText = error[inputs[i].type];
      } else if (
        value.match(regexList[inputs[i].type]).length !== value.length &&
        inputs[i].type !== "email"
      ) {
        inputs[i].classList = "formulaire__input formulaire__input--invalid";
        errors[i].innerText = error[inputs[i].type];
        errors[i].classList = "formulaire__error formulaire__error--active";
      } else {
        inputs[i].classList = "formulaire__input formulaire__input--valid";
        errors[i].innerText = "";
        errors[i].classList = "formulaire__error formulaire__error--inactive";
      }
    });
  }
}
