import { esp, en } from "./db.js"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const userLang = navigator.language || navigator.userLanguage;
let translated = false

function translate() {

  const lang = translated ? esp : en
  const elements = document.querySelectorAll(".appear")

  //make the elements disappear
  for (let i = 0; i < elements.length; i++)
    elements[i].className = "disappear"

  setTimeout(() => {

    //actual translation
    for (const i in lang)
      document.getElementById(i).innerHTML = lang[i]

    document.getElementById("target").innerText = translated ? "Español" : "English"

    //show them again
    for (let i = 0; i < elements.length; i++)
      elements[i].className = "appear"

  }, 1000)

  return translated = !translated

}

function changeMode() {

  document.body.classList.toggle('light');

  [...document.getElementsByTagName("h2")]
    .map((title) => title.classList.toggle('lightTitle'));

  [...document.getElementsByTagName("header")]
    .map((title) => title.classList.toggle('light'));
}

//page loads in spanish if the browser's language is in esp, otherwise loads in eng
if (userLang === "es-ES") {

  for (const i in esp)
    document.getElementById(i).innerHTML = esp[i]

  document.getElementById("target").innerText = "English"
}

document.getElementById("target").onclick = function() {
  translate();
}
document.getElementById("switch").onchange = function() {
  changeMode();
}
