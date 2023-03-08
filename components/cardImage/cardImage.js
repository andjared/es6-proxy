export const cardImage = ({ imgUrl }) => {
  const cardImage = document.createElement("img");
  cardImage.src = imgUrl;

  return cardImage;
};
