const form = document.getElementById("form");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sucessMessage = document.querySelector(".sucess-message");
const errorMessage = document.querySelector(".message-erro");
validaForm = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validaForm = num1.value <= num2.value;

  if (validaForm === true) {
    sucessMessage.classList.add("sucess-message");
    sucessMessage.style.display = "block";
    errorMessage.style.display = "none";
    num1.value = "";
    num2.value = "";
  } else {
    errorMessage.classList.add("message-erro");
    errorMessage.style.display = "block";
    sucessMessage.style.display = "none";
    num1.value = "";
    num2.value = "";
  }
});
