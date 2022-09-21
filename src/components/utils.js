import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

let timeline = null;

export const changeMainContent = (page) => {
  const MAIN = document.querySelector('.main');
  const nav = document.querySelector(".nav-menu");
  page = page.toUpperCase();

  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }

  MAIN.firstChild.remove();
  if (page === "HOME") {
    MAIN.appendChild(Home());
    animate();
    nav.childNodes[0].classList.add("active");
  } else if (page === "MENU") {
    MAIN.appendChild(Menu());
    nav.childNodes[1].classList.add("active");
  } else if (page === "CONTACT") {
    MAIN.appendChild(Contact());
    nav.childNodes[2].classList.add("active");
  }
};

export const createContainer = (elType, elClass) => {
  const element = document.createElement(`${elType}`);
  element.classList.add(`${elClass}`);
  return element;
};

export const createTextElement = (elType, elClass, elText) => {
  const element = createContainer(elType, elClass);
  element.textContent = elText;
  return element;
};

export const firstLetter = (letter) => {
  const sp = createContainer("span", "first-letter");
  sp.textContent = letter.toUpperCase();
  return sp;
};

const animate = function() {
  timeline = gsap.timeline({repeat: -1});
  timeline.set(".image", {attr: { src: "../src/images/pic1.png" }})
  timeline.from(".image", {duration: 2, x: 1000, ease: "circ"})
  timeline.from(".image", {duration: 2, x: 0, ease: "expo.in"}, "+=3")

  timeline.set(".image", {attr: { src: "../src/images/pic2.png" }})
  timeline.from(".image", {duration: 2, x: 1000, ease: "circ"})
  timeline.from(".image", {duration: 2, x: 0, ease: "expo.in"}, "+=3")

  timeline.set(".image", {attr: { src: "../src/images/pic3.png" }})
  timeline.from(".image", {duration: 2, x: 1000, ease: "circ"})
  timeline.from(".image", {duration: 2, x: 0, ease: "expo.in"}, "+=3")
};