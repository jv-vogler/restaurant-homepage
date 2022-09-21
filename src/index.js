import "./style.css"
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";
import { createContainer, changeMainContent, firstLetter } from "./components/utils";

const CONTENT = document.querySelector("#content");
const NAV = createContainer("nav", "nav-wrapper");
const MAIN = createContainer("div", "main");
const FOOTER = createContainer("footer", "footer");

const loadPage = () => {
  createNav();
  createMain();
  createFooter();
};

// Nav Setup
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
    i.classList.add("item");
    i.textContent = item;
    i.addEventListener("click", (e) => changeMainContent(e.target.innerText));
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

// Main Setup
const createMain = () => {
  MAIN.appendChild(Home());
  CONTENT.appendChild(MAIN);
  changeMainContent("Home");
};

// Footer Setup
const createFooter = () => {
  const foo = document.createElement("small");
  foo.textContent = "\u00A9 2022 Sushi Oasis. All rights reserved.";
  FOOTER.appendChild(foo);
  CONTENT.appendChild(FOOTER);
};


loadPage();
