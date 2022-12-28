export const docsFields = (text) => {
  const formatText =
    text[0].toUpperCase() +
    text
      .substring(1)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .trim();
  return formatText;
};
