import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";

let timeline = null;

export const changeMainContent = (page) => {
  const MAIN = document.querySelector(".main");
  const nav = document.querySelector(".nav-menu");
  const reload = new Event("reload");
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
    setupSwiper();
    nav.childNodes[1].classList.add("active");
  } else if (page === "CONTACT") {
    MAIN.appendChild(Contact());
    nav.childNodes[2].classList.add("active");
  }
  document.dispatchEvent(reload);
};

export const createEl = (arg) => {
  /**
   * Returns an HTML Element with specified params.
   * @param {Object}       arg             Object container.
   * @param {String}       arg.elTag       If not specified creates a <div> as default.
   * @param {String/Array} arg.ElClasses   If specified adds one or more classes to the element.
   * @param {String}       arg.elTxt       If specified adds it as textContent to the element.
   * @param {Object}       arg.dataAttr    If specified adds data attributes based on keys:values passed.
   *                                       e.g. dataAttr: { name: value } => data-name="value"
   */
  const tag = arg.elTag ? arg.elTag : "div";
  const element = document.createElement(tag);

  // Checks for Classes
  if (arg.elClasses) {
    if (typeof arg.elClasses === "string") {
      element.classList.add(arg.elClasses);
    } else if (Array.isArray(arg.elClasses)) {
      element.classList.add(...arg.elClasses);
    }
  }

  // Checks for Text
  if (arg.elTxt) element.textContent = arg.elTxt;

  // Checks for Data Attributes
  if (arg.dataAttr) {
    const keys = Object.keys(arg.dataAttr);
    const values = Object.values(arg.dataAttr);
    for (let i = 0; i < keys.length; i++) {
      element.setAttribute("data-" + keys[i], values[i]);
    }
  }

  if (arg.elHTML) {
    element.innerHTML = arg.elHTML;
  }

  return element;
};

export const firstLetter = (letter) => {
  const sp = createEl({ elTag: "span", elClasses: "first-letter" });
  sp.textContent = letter.toUpperCase();
  return sp;
};

const animate = function () {
  timeline = gsap.timeline({ repeat: -1 });

  timeline.from(".image", { duration: 2, x: 1000, ease: "circ" });
  timeline.from(".image", { duration: 2, x: 0, ease: "expo.in" }, "+=3");

  timeline.set(".image", { attr: { src: pic2 } });
  timeline.from(".image", { duration: 2, x: 1000, ease: "circ" });
  timeline.from(".image", { duration: 2, x: 0, ease: "expo.in" }, "+=3");

  timeline.set(".image", { attr: { src: pic3 } });
  timeline.from(".image", { duration: 2, x: 1000, ease: "circ" });
  timeline.from(".image", { duration: 2, x: 0, ease: "expo.in" }, "+=3");
  timeline.set(".image", { attr: { src: pic1 } });
};

const setupSwiper = function () {
  const swiper = new Swiper(".menuSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
