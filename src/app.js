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
  if (cvcNumber.value.length != 16) {
    addError("Invalid card number.");
    cardNumber.classList.add("is-invalid");
  }
};

document.querySelector("#theForm").addEventListener("submit", validate);
