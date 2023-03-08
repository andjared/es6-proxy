import { button } from "../button/button.js";
import { svgIcon } from "../svgIcon/svgIcon.js";
import styles from "./imageTopContent.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export const imageTopContent = ({ isSuperhost }) => {
  const imageTopContent = document.createElement("div");
  imageTopContent.className = "top-content";
  const superhost = document.createElement("div");

  if (isSuperhost) {
    superhost.className = "superhost";
    superhost.innerText = "Superhost";
  }

  imageTopContent.append(
    button({
      className: "btn-save",
      child: svgIcon({ path: "./icons/icon-save.svg#save" }),
    }),
    superhost
  );

  return imageTopContent;
};
