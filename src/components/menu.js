import { createEl } from "./utils";

export default function Menu() {
  const wrapper = createEl({
    elTag: "div",
    elClasses: ["main-wrapper", "main-wrapper--menu"],
    elTxt: "Menu"
  });


  
  return wrapper
}