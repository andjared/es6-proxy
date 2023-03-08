import styles from "./contentTitleSection.css" assert { type: "css" };
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

const cardTitle = ({ title }) => {
  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.innerText = title;

  return cardTitle;
};

const cardReview = ({ review }) => {
  const cardReview = document.createElement("span");
  cardReview.className = "card-review";
  const cardReviewContent = document.createElement("span");
  cardReviewContent.innerText = review;
  const starIcon = document.createElement("i");
  starIcon.className = "fa fa-star";
  cardReview.append(starIcon, cardReviewContent);

  return cardReview;
};

export { cardTitle, cardReview };
