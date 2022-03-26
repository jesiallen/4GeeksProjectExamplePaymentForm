/* eslint-disable */
import "bootstrap";
import "./style.css";

let addError = message => {
  let error = document.querySelector(".alert");
  error.classList.contains("d-none") && error.classList.toggle("d-none");

  error.innerHTML += `<p>${message}</p>`;
};

let validate = event => {
  event.preventDefault();
  let error = document.querySelector(".alert");
  !error.classList.contains("d-none") && error.classList.toggle("d-none");
  document.querySelectorAll("input").forEach(input => {
    input.classList.remove("is-invalid");
  });
  error.innerHTML = "";

  let cardNumber = document.querySelector("#cardNumber");
  let cvcNumber = document.querySelector("#cvcNumber");
  let purchaseAmount = document.querySelector("#purchaseAmount");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");
  let inputZip = document.querySelector("#inputZip");
  let message = document.querySelector("#message");

  if (cardNumber.value.length != 16) {
    addError("Invalid card number.");
    cardNumber.classList.add("is-invalid");
  }
  if (cvcNumber.value.length != 3) {
    addError("Invalid CVC number.");
    cvcNumber.classList.add("is-invalid");
  }
  if (purchaseAmount.value.length != 4) {
    addError("Incorrect puchase amount.");
    purchaseAmount.classList.add("is-invalid");
  }
  if (firstName.value.length < 2) {
    addError("Please enter first name.");
    firstName.classList.add("is-invalid");
  }
  if (lastName.value.length < 2) {
    addError("Please enter last name.");
    lastName.classList.add("is-invalid");
  }
  if (inputCity.value.length < 2) {
    addError("Please enter your city.");
    inputCity.classList.add("is-invalid");
  }
  if (inputState.value.length != 2) {
    addError("Please choose your state.");
    inputState.classList.add("is-invalid");
  }
  if (inputZip.value.length != 5) {
    addError("Please enter 5 digit zip code.");
    inputZip.classList.add("is-invalid");
  }
  if (message.value.length > 50) {
    addError("Message is limited to 50 characters.");
    message.classList.add("is-invalid");
  }
};

document.querySelector("#theForm").addEventListener("submit", validate);
