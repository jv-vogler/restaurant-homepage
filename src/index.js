import "./style.css"
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";
import { createContainer } from "./components/utils";

const CONTENT = document.querySelector("#content");
const NAV = createContainer("nav", "nav-wrapper");
const MAIN = createContainer("div", "main");
const FOOTER = createContainer("footer", "footer");

let timeline = null;

const loadPage = () => {
  createNav();
  createMain();
  createFooter();
};

// NAV Setup
const createNav = () => {
  NAV.append(
    createLogo(),
    createNavMenu("Home", "Menu", "Contact"),
    createSocialMenu("facebook", "instagram", "twitter")
  );
  CONTENT.appendChild(NAV);
};

const createLogo = () => {
  const logo = createContainer("h1", "logo");
  logo.append(firstLetter("S"), "ushi ", firstLetter("O"), "asis");
  return logo;
};

const createNavMenu = (...menuItems) => {
  const menu = createContainer("ul", "nav-menu");
  for (const item of menuItems) {
    const i = document.createElement("li");
    item.toUpperCase() === 'HOME' ? i.classList.add("item", "active") : i.classList.add("item");
    i.textContent = item;
    i.addEventListener('click', changeMenu);
    menu.appendChild(i);
  }
  return menu;
};

const createSocialMenu = (...brandName) => {
  const menu = createContainer("section", "social-icons");
  for (const item of brandName) {
    const i = document.createElement("i");
    i.classList.add("fa-brands", `fa-${item.toLowerCase()}`);
    menu.appendChild(i);
  }
  return menu;
};

// MAIN Setup
const createMain = () => {
  MAIN.appendChild(Home());
  CONTENT.appendChild(MAIN);
  animate();
};

// FOOTER Setup
const createFooter = () => {
  const foo = document.createElement("small");
  foo.textContent = "\u00A9 2022 Sushi Oasis. All rights reserved.";
  FOOTER.appendChild(foo);
  CONTENT.appendChild(FOOTER);
};

// Utility
const firstLetter = (letter) => {
  const sp = document.createElement("span");
  sp.classList.add('first-letter');
  sp.textContent = letter.toUpperCase();
  return sp;
};

const changeMenu = (e) => {
  const clickedMenuText = e.target.innerText.toUpperCase();
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }
  e.target.classList.add('active')
  
  MAIN.firstChild.remove();
  if (clickedMenuText === 'HOME') {
    MAIN.appendChild(Home())
    animate();
  } else if (clickedMenuText === 'MENU') {
    MAIN.appendChild(Menu())
  } else if (clickedMenuText === 'CONTACT') {
    MAIN.appendChild(Contact())
  }
};

const animate = function() {
  timeline = gsap.timeline({repeat: -1});
  timeline.set('.image', {attr: { src: "../src/images/pic1.png" }})
  timeline.from('.image', {duration: 2, x: 1000, ease: 'circ'})
  timeline.from('.image', {duration: 2, x: 0, ease: 'expo.in'}, '+=3')

  timeline.set('.image', {attr: { src: "../src/images/pic2.png" }})
  timeline.from('.image', {duration: 2, x: 1000, ease: 'circ'})
  timeline.from('.image', {duration: 2, x: 0, ease: 'expo.in'}, '+=3')

  timeline.set('.image', {attr: { src: "../src/images/pic3.png" }})
  timeline.from('.image', {duration: 2, x: 1000, ease: 'circ'})
  timeline.from('.image', {duration: 2, x: 0, ease: 'expo.in'}, '+=3')
}

loadPage();