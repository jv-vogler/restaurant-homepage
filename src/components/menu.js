import { createEl } from "./utils";

export default function Menu() {
  const wrapper = createEl({
    elTag: "section",
    elClasses: ["main-wrapper", "main-wrapper--menu"],
  });

  const swiperEl = createEl({
    elTag: "div",
    elClasses: ["swiper", "menuSwiper"],
  });

  const swiperWrapper = createEl({
    elTag: "div",
    elClasses: "swiper-wrapper",
  });

  const swiperPrev = createEl({
    elTag: "div",
    elClasses: "swiper-button-prev",
  });

  const swiperNext = createEl({
    elTag: "div",
    elClasses: "swiper-button-next",
  });

  const swiperPagination = createEl({
    elTag: "div",
    elClasses: "swiper-pagination",
  });

  const slide1 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card1 = createCard("Uramaki")
  slide1.append(card1);

  const slide2 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card2 = createCard("Nigiri")
  slide2.append(card2);

  const slide3 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card3 = createCard("Hosomaki");
  slide3.append(card3);

  const slide4 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card4 = createCard("Sashimi")
  slide4.append(card4);

  swiperWrapper.append(slide1, slide2, slide3, slide4);
  swiperEl.append(swiperWrapper, swiperPagination, swiperPrev, swiperNext);
  wrapper.appendChild(swiperEl);

  return wrapper;
}

function createCard(title) {
  const card = createEl({
    elTag: "div",
    elClasses: "card"
  })

  const cardTitle = createEl({
    elTag: "h1",
    elClasses: "card-title",
    elTxt: `${title}`
  })

  card.append(cardTitle);
  return card;
}

function createDish(dishName, dishDescription, dishPrice) {
  const dish = createEl({
    elTag: "div",
    elClasses: "dish"
  })

  const name = createEl({
    elTag: "h3",
    elClasses: "dish-name",
    elTxt: `${dishName}`
  })

  const description = createEl({
    elTag: "p",
    elClasses: "dish-description",
    elTxt: `${dishDescription}`
  })

  const price = createEl({
    elTag: "p",
    elClasses: "dish-price",
    elTxt: `${dishPrice}`
  })
  
  dish.append(name, description, price);
  return dish;
};