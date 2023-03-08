import { cardContent } from "../cardContent/cardContent.js";
import { cardImageWrapper } from "../cardImageWrapper/cardImageWrapper.js";
import styles from "./card.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const card = ({
  title,
  description,
  review,
  beds,
  dates,
  priceNight,
  priceTotal,
  imgUrl,
  isSuperhost,
}) => {
  const card = document.createElement("div");
  card.className = "card";

  //   append nested elements to card & pass needed properties
  card.append(
    cardImageWrapper({ imgUrl, isSuperhost }),
    cardContent({
      title,
      description,
      review,
      beds,
      dates,
      priceNight,
      priceTotal,
    })
  );

  return card;
};
