import { cardPrice } from "../cardPrice/cardPrice.js";
import {
  cardReview,
  cardTitle,
} from "../contentTitleSection/contentTitleSection.js";
import {
  cardDescription,
  cardBeds,
  cardDate,
} from "../contentExtraInfo/contentExtraInfo.js";
import styles from "./cardContent.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardContent = ({
  title,
  description,
  review,
  beds,
  dates,
  priceNight,
  priceTotal,
}) => {
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  cardContent.append(
    cardTitle({ title }),
    cardReview({ review }),
    cardDescription({ description }),
    cardBeds({ beds }),
    cardDate({ dates }),
    cardPrice({ priceNight, priceTotal })
  );

  return cardContent;
};
