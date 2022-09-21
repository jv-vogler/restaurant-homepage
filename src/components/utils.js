export const createContainer = (elType, elClass) => {
  const element = document.createElement(`${elType}`);
  element.classList.add(`${elClass}`);
  return element;
};

export const createTextElement = (elType, elClass, elText) => {
  const element = createContainer(elType, elClass);
  element.textContent = elText;
  return element;
};

export const firstLetter = (letter) => {
  const sp = createContainer("span", "first-letter");
  sp.textContent = letter.toUpperCase();
  return sp;
};

