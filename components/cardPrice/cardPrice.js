import { button } from "../button/button.js";
import styles from "./cardPrice.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardPrice = ({ priceNight, priceTotal }) => {
  const cardPrice = document.createElement("div");
  cardPrice.className = "card-price";

  const nightPrice = document.createElement("span");
  nightPrice.className = "price-night";
  const nightPriceValue = document.createElement("span");
  nightPriceValue.className = "price-value";
  nightPriceValue.innerText = priceNight;
  nightPrice.append(nightPriceValue, "night");

  const priceDivider = document.createElement("span");
  priceDivider.innerText = "·";

  const totalPrice = document.createElement("span");
  totalPrice.className = "price-total";
  const totalPriceValue = document.createElement("span");
  totalPriceValue.className = "price-value";
  totalPriceValue.innerText = priceTotal;
  totalPrice.append(totalPriceValue, "total");

  cardPrice.append(
    nightPrice,
    priceDivider,
    button({ className: "btn-price", child: totalPrice })
  );

  return cardPrice;
};
