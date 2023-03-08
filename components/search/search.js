import { button } from "../button/button.js";
import { svgIcon } from "../svgIcon/svgIcon.js";
import styles from "./search.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const search = ({ handleSearchEvent }) => {
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "search-wrapper";

  const searchPlace = document.createElement("div");
  searchPlace.className = "search-place";
  const placeLabel = document.createElement("label");
  placeLabel.htmlFor = "place";
  placeLabel.innerText = "Where";
  const placeInput = document.createElement("input");
  placeInput.type = "text";
  placeInput.id = "place";
  placeInput.placeholder = "Search destinations";

  placeInput.addEventListener("keyup", (e) => {
    handleSearchEvent(e.target.value.toLowerCase());
  });

  searchPlace.append(placeLabel, placeInput);

  searchWrapper.append(
    searchPlace,
    button({
      className: "btn-search",
      child: svgIcon({ path: "./icons/icon-search.svg#search" }),
    })
  );

  return searchWrapper;
};
