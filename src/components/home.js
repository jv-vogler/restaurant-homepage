import { createEl, changeMainContent } from "./utils";

export default function Home() {
  const wrapper = createEl({
    elTag: "div",
    elClasses: ["main-wrapper", "main-wrapper--home"],
  });

  const hero = createEl({
    elTag: "div",
    elClasses: ["hero", "hero-special"],
  });

  const header = createEl({
    elTag: "h3",
    elClasses: "header",
    elTxt: "The paradise for sushi lovers.",
    dataAttr: { key: "hero-header" }
  });

  const paragraph = createEl({
    elTag: "p",
    elClasses: "txt",
    elTxt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error est
    sit aliquid? Quibusdam, assumenda? Voluptatem cumque et nesciunt.
    Expedita, praesentium sequi. Doloribus reprehenderit consequuntur
    soluta.`,
    dataAttr: { key: "hero-paragraph" }
  });

  const btn = createEl({
    elTag: "button",
    elClasses: "btn",
    elTxt: "View Menu",
    dataAttr: { key: "menu-btn" },
  });
  btn.addEventListener("click", () => changeMainContent("Menu"));

  const img = createPicture();

  hero.append(header, paragraph, btn);
  wrapper.append(hero, img);
  return wrapper;
}

const createPicture = () => {
  const img = createEl({
    elTag: "img",
    elClasses: "image",
  });
  img.src = "../src/images/pic1.png";
  img.alt = "japanese food picture";
  return img;
};
