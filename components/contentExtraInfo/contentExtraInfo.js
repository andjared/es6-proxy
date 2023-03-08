import styles from "./contentExtraInfo.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

const cardDescription = ({ description }) => {
  const desscriptionInfo = document.createElement("p");
  desscriptionInfo.className = "card-description";
  desscriptionInfo.innerText = description;

  return desscriptionInfo;
};

const cardBeds = ({ beds }) => {
  const bedsInfo = document.createElement("p");
  bedsInfo.className = "card-beds";
  bedsInfo.innerText = beds;

  return bedsInfo;
};

const cardDate = ({ dates }) => {
  const datesInfo = document.createElement("p");
  datesInfo.className = "card-date";
  datesInfo.innerText = dates;

  return datesInfo;
};

export { cardDescription, cardBeds, cardDate };
