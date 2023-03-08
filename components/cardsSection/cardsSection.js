import { card } from "../card/card.js";
import styles from "./cardsSection.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardsSection = ({ data }) => {
  const gridContainer = document.createElement("section");
  gridContainer.className = "grid-container";

  data.map((item) => {
    gridContainer.append(card({ ...item }));
  });

  return gridContainer;
};
