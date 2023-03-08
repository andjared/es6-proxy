import { cardImage } from "../cardImage/cardImage.js";
import { imageTopContent } from "../imageTopContent/imageTopContent.js";
import styles from "./cardImageWrapper.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const cardImageWrapper = ({ imgUrl, isSuperhost }) => {
  const cloneNode = (n, node, parent) => {
    for (let i = 0; i < n; i++) {
      const clonedNode = node.cloneNode(true);
      parent.append(clonedNode);
    }
  };

  const imageWrapper = document.createElement("div");
  imageWrapper.classList = "card-img stacked";

  const slideIndicators = document.createElement("div");
  slideIndicators.className = "slide-indicators";

  const indicator = document.createElement("span");
  indicator.className = "indicator";

  //append indicator node 5 times
  cloneNode(5, indicator, slideIndicators);

  imageWrapper.append(
    cardImage({ imgUrl }),
    imageTopContent({ isSuperhost }),
    slideIndicators
  );

  return imageWrapper;
};
