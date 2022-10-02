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

  // SLIDE 1
  const slide1 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card1 = createCard("Uramaki");
  card1.append(
    createDish(
      "Green Roll",
      "Seaweed/Avocado/Cucumber/Tobiko/Wasabi Mayo",
      "8.50",
      { name: "", description: "dish-dsc--uramaki1" }
    ),
    createDish(
      "Spicy Tuna Roll",
      "Seaweed/Avocado/Chilli Powder/Tuna/Spicy Mayo",
      "10.50",
      { name: "", description: "dish-dsc--uramaki2" }
    ),
    createDish(
      "Salmon Cream Cheese Roll",
      "Seaweed/Salmon/Cream Cheese/Seaweed Powder/ Wasabi Mayo",
      "10.50",
      { name: "", description: "dish-dsc--uramaki3" }
    ),
    createDish(
      "California Roll",
      "Seaweed/Avocado/Sesame/Crab/Tobiko/Chef's Special Mayo",
      "10.50",
      { name: "", description: "dish-dsc--uramaki4" }
    ),
  );
  slide1.append(card1);

  // SLIDE 2
  const slide2 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card2 = createCard("Nigiri");
  card2.append(
    createDish(
      "Shake Hamachi",
      "Hamachi/Salty Soy Sauce/Wasabi",
      "8.50",
      { name: "", description: "dish-dsc--nigiri1" }
    ),
    createDish(
      "Tuna",
      "Tuna/Salty Soy Sauce/Wasabi",
      "8.50",
      { name: "", description: "dish-dsc--nigiri2" }
    ),
    createDish(
      "Ebi",
      "Prawn/Seaweed/Salty Soy Sauce/Wasabi",
      "8.50",
      { name: "", description: "dish-dsc--nigiri3" }
    ),
    createDish(
      "Octopus",
      "Octopus/Salty Soy Sauce/ Wasabi",
      "10.50",
      { name: "", description: "dish-dsc--nigiri4" }
    ),
  );
  slide2.append(card2);

  // SLIDE 3
  const slide3 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card3 = createCard("Hosomaki");
  card3.append(
    createDish(
      "Kappa Maki",
      "Veggie Cucumber",
      "4.50",
      { name: "", description: "dish-dsc--hosomaki1" }
    ),
    createDish(
      "Cheese Maki",
      "Cream Cheese",
      "4.50",
      { name: "", description: "dish-dsc--hosomaki2" }
    ),
    createDish(
      "Spicy Tuna Maki",
      "Tuna",
      "6.50",
      { name: "", description: "dish-dsc--hosomaki3" }
    ),
    createDish(
      "Salmon Maki",
      "Salmon",
      "6.50",
      { name: "", description: "dish-dsc--hosomaki4" }
    ),
  );
  slide3.append(card3);

  // SLIDE 4
  const slide4 = createEl({
    elTag: "div",
    elClasses: "swiper-slide",
  });
  const card4 = createCard("Sashimi");
  card4.append(
    createDish(
      "Salmon Sashimi",
      "Salmon/Salty Soy Sauce/Wasabi",
      "9.50",
      { name: "", description: "dish-dsc--sashimi1" }
    ),
    createDish(
      "Tuna Sashimi",
      "Tuna/Salty Soy Sauce/Wasabi",
      "10.50",
      { name: "", description: "dish-dsc--sashimi2" }
    ),
    createDish(
      "Sashimi Mix",
      "Salmon/Tuna/Hamachi/Salty Soy Sauce/Wasabi",
      "15.50",
      { name: "", description: "dish-dsc--sashimi3" }
    ),
  );
  slide4.append(card4);

  swiperWrapper.append(slide1, slide2, slide3, slide4);
  swiperEl.append(swiperWrapper, swiperPagination, swiperPrev, swiperNext);
  wrapper.appendChild(swiperEl);

  return wrapper;
}

function createCard(title) {
  const card = createEl({
    elTag: "div",
    elClasses: "card",
  });

  const cardTitle = createEl({
    elTag: "h1",
    elClasses: "card-title",
    elTxt: `${title}`,
  });

  card.append(cardTitle);
  return card;
}

function createDish(dishName, dishDescription, dishPrice, data) {
  const dish = createEl({
    elTag: "div",
    elClasses: "dish",
  });

  // const wrap = createEl({
  //   elTag: "div",
  //   elClasses: "dish-wrap"
  // })

  const name = createEl({
    elTag: "h3",
    elClasses: "dish-name",
    elTxt: `${dishName}`,
    dataAttr: data.name,
  });

  const price = createEl({
    elTag: "p",
    elClasses: "dish-price",
    elHTML: `<span class="currency">R$</span> ${dishPrice}`,
    // dataAttr: data.price,
  });

  const description = createEl({
    elTag: "p",
    elClasses: "dish-description",
    elTxt: `${dishDescription}`,
    dataAttr: { key: data.description },
  });

  // wrap.append(name, price)
  dish.append(name, price, description);
  return dish;
}
