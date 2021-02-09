"use strict";
const checkbox = document.querySelector(".checkbox");
const textbox = document.querySelector(".textbox.shadow");
const button = document.querySelector("button");

const disableAll = () => {
  button.style.disabled = true;
};

textbox.addEventListener("click", function () {
  console.log("clicked");
  disableAll();
  //   textboxActive();
});
