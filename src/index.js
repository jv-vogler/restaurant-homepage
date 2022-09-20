const CONTENT = document.querySelector("#content");

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
    i.classList.add("item");
    i.textContent = item;
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
  MAIN.textContent = 'main placeholder'
  CONTENT.appendChild(MAIN);
}

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
  sp.textContent = letter.toUpperCase();
  return sp;
};

createNav();
createMain();
createFooter();
