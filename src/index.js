import "./style.css";
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";
import { setLanguage } from "./components/language";
import { createEl, changeMainContent, firstLetter } from "./components/utils";

const CONTENT = document.querySelector("#content");
const NAV = createEl({ elTag: "nav", elClasses: "nav-wrapper" });
const MAIN = createEl({ elTag: "div", elClasses: "main" });
const FOOTER = createEl({ elTag: "footer", elClasses: "footer" });

const loadPage = () => {
  createNav();
  createMain();
  createFooter();
  setLanguage();
};

// Nav Setup
const createNav = () => {
  NAV.append(
    createLogo(),
    createNavMenu("Home", "Menu", "Contact"),
    createSocialMenu("facebook", "instagram", "twitter"),
    createLangToggle()
  );
  CONTENT.appendChild(NAV);
};

const createLogo = () => {
  const logo = createEl({
    elTag: "h1",
    elClasses: "logo",
  });
  logo.append(firstLetter("S"), "ushi ", firstLetter("O"), "asis");

  return logo;
};

const createNavMenu = (...menuItems) => {
  const menu = createEl({
    elTag: "ul",
    elClasses: "nav-menu",
  });

  for (const item of menuItems) {
    const i = createEl({
      elTag: "li",
      elClasses: "item",
      elTxt: item,
      dataAttr: { key: item.toLowerCase() },
    });
    i.addEventListener("click", (e) => changeMainContent(item));
    menu.appendChild(i);
  }

  return menu;
};

const createSocialMenu = (...brandName) => {
  const menu = createEl({
    elTag: "section",
    elClasses: "social-icons",
  });
  for (const item of brandName) {
    const i = createEl({
      elType: "i",
      elClasses: ["fa-brands", `fa-${item.toLowerCase()}`],
    });
    menu.appendChild(i);
  }

  return menu;
};

const createLangToggle = () => {
  const label = createEl({ elTag: "label", elClasses: "toggle" });
  label.setAttribute("for", "langToggle");

  const checkbox = createEl({ elTag: "input", elClasses: "toggle__input" });
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "langToggle");

  label.appendChild(checkbox);
  return label;
};

// Main Setup
const createMain = () => {
  MAIN.appendChild(Home());
  CONTENT.appendChild(MAIN);
  changeMainContent("Home");
};

// Footer Setup
const createFooter = () => {
  const foo = createEl({
    elTag: "small",
    elTxt: "\u00A9 2022 Sushi Oasis. All rights reserved.",
  });
  FOOTER.appendChild(foo);

  const attribution = createEl({
    elTag: "a",
    elClasses: "attribution",
    elTxt: "Images by luis_molinero on Freepik",
  });
  attribution.setAttribute(
    "href",
    "https://www.freepik.com/free-photo/hand-holding-sushi-with-chopsticks_1198655.htm#&position=0&from_view=detail#&position=0&from_view=detail"
  );
  attribution.setAttribute("target", "_blank");

  FOOTER.appendChild(attribution);
  CONTENT.appendChild(FOOTER);
};

loadPage();
