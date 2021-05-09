"use strict";

// VARIABLES
let darkModeOn = (document.querySelector(".nameMode").value = "dark");

function changeColours() {
  document.querySelector(".btn").classList.toggle("btn-position");

  document.querySelector("body").classList.toggle("dark-mode-body");
  document.querySelector(".btn").classList.toggle("dark-mode-btn");
  document.querySelector(".toggle").classList.toggle("dark-mode-toggle");
}

// WHEN YOU PRESS THE BUTTON
document.querySelector(".btn").addEventListener("click", function () {
  changeColours();

  if (darkModeOn === "dark") {
    document.querySelector(".nameMode").textContent = "white";
    darkModeOn = "white";
  } else if (darkModeOn === "white") {
    document.querySelector(".nameMode").textContent = "dark";
    darkModeOn = "dark";
  }
});
