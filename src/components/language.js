import langdata from "./languages.json";

let pageLang = document.querySelector("html").getAttribute("lang");

export function setLanguage() {
  let locale = navigator.language.substring(0, 2);
  const toggleBtn = document.querySelector("#langToggle");
  if (locale === "pt") {
    document.querySelector("html").setAttribute("lang", "pt");
    pageLang = "pt";
    applyLanguage();

    toggleBtn.click();
    toggleBtn.addEventListener("change", toggleLanguage);
  } else {
    document.querySelector("html").setAttribute("lang", "en");
    pageLang = "en";
    applyLanguage();

    toggleBtn.addEventListener("change", toggleLanguage);
  }
  document.addEventListener("reload", applyLanguage);
}

function toggleLanguage() {
  if (pageLang === "pt") {
    pageLang = "en";
    document.querySelector("html").setAttribute("lang", pageLang);
    applyLanguage();
  } else if (pageLang === "en") {
    pageLang = "pt";
    document.querySelector("html").setAttribute("lang", pageLang);
    applyLanguage();
  }
}

function applyLanguage() {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    const lang = pageLang;
    if (key) {
      element.textContent = langdata.languages[lang].strings[key];
      if (element.getAttribute("value")) element.setAttribute("value", langdata.languages[lang].strings[key])
    }
  });
}
