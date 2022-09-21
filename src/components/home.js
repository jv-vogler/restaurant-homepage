import { createContainer, changeMainContent, createTextElement } from "./utils";

export default function Home() {
  const wrapper = createContainer("div", "main-wrapper");
  wrapper.classList.add("main-wrapper--home");

  const hero = createContainer("div", "hero");
  const header = createTextElement("h3","header",
    "Lorem ipsum dolor sit amet.");

  const paragraph = createTextElement("p", "txt",
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error est
  sit aliquid? Quibusdam, assumenda? Voluptatem cumque et nesciunt.
  Expedita, praesentium sequi. Doloribus reprehenderit consequuntur
  soluta.`);

  const btn = createTextElement("button", "btn", "View Menu");
  btn.addEventListener('click', () => changeMainContent("Menu"));
  
  const img = createPicture();

  hero.append(header, paragraph, btn);
  wrapper.append(hero, img);
  return wrapper;
}

const createPicture = () => {
  const img = createContainer("img", "image");
  img.src = "../src/images/pic1.png";
  img.alt = "japanese food picture";
  return img
}
