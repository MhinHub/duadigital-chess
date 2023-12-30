export const getECOTagFromURL = (
  url: string,
  wordsLength: number = 2,
  letterJoin: string = " "
) => {
  const urlParts = url.split("/");
  const lastPart = urlParts[urlParts.length - 1];
  const openingParts = lastPart.split("-");
  const openingName = openingParts.slice(0, wordsLength).join(letterJoin);
  return openingName;
};
