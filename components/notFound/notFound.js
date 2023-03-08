import { svgIcon } from "../svgIcon/svgIcon.js";
import styles from "./notFound.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const notFound = () => {
  const notFound = document.createElement("div");
  notFound.className = "not-found";
  const text = document.createElement("p");
  text.innerText = "No search results. Try something else.";

  notFound.append(text, svgIcon({ path: "./icons/not-found.svg#not-found" }));

  return notFound;
};
