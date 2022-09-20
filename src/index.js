import "./style.css"
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";

const CONTENT = document.querySelector("#content");

const loadPage = () => {
  createNav();
  createMain();
  createFooter();
};

// NAV Setup
const NAV = document.createElement("nav");
NAV.classList.add("nav-wrapper");

const createNav = () => {
  NAV.append(
    createLogo(),
    createNavMenu("Home", "Menu", "Contact"),
    createSocialMenu("facebook", "instagram", "twitter")
  );
  CONTENT.appendChild(NAV);
};

const createLogo = () => {
  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.append(firstLetter("S"), "ushi ", firstLetter("O"), "asis");
  return logo;
};

const createNavMenu = (...menuItems) => {
  const menu = document.createElement("ul");
  menu.classList.add("nav-menu");
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
  const menu = document.createElement("section");
  menu.classList.add("social-icons");
  for (const item of brandName) {
    const i = document.createElement("i");
    i.classList.add("fa-brands", `fa-${item.toLowerCase()}`);
    menu.appendChild(i);
  }
  return menu;
};

// MAIN Setup
const MAIN = document.createElement("div");
MAIN.classList.add("main");

const createMain = () => {
  MAIN.appendChild(Home());
  CONTENT.appendChild(MAIN);
};

// FOOTER Setup
const FOOTER = document.createElement("footer");
FOOTER.classList.add("footer");

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
  } else if (clickedMenuText === 'MENU') {
    MAIN.appendChild(Menu())
  } else if (clickedMenuText === 'CONTACT') {
    MAIN.appendChild(Contact())
  }
};

loadPage();
