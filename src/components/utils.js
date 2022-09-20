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