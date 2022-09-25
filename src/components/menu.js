import { createEl } from "./utils";

export default function Menu() {
  const wrapper = createEl({
    elTag: "section",
    elClasses: ["main-wrapper", "main-wrapper--menu"],
    elTxt: "Menu"
  });


  
  return wrapper
}