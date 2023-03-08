export const button = ({ className, child }) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.append(child);

  return btn;
};
