"use strict";
const emailInput = document.querySelector("#email-input");
const submitBtn = document.querySelector(".subscriber");
const container = document.querySelector(".container");
const successContainer = document.querySelector(".successContainer");

function submit() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailAddress = emailInput.value;

  if (emailPattern.test(emailAddress)) {
    container.style.display = "none";
    successContainer.style.display = "block";
  } else {
    emailInput.value = "";
    emailInput.placeholder = "Invalid Email Address!";
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submit();
});

const dismissBtn = document.querySelector(".dismissBtn");
function reload() {
  // Reload the page when Dismiss button is clicked
  window.location.reload();
}
dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
});