export const svgIcon = ({ path }) => {
  const svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const useTag = document.createElementNS("http://www.w3.org/2000/svg", "use");

  useTag.setAttribute("href", path);
  svgTag.append(useTag);

  return svgTag;
};
