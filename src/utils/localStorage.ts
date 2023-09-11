export const getFavoritedItems = (): string[] => {
  const favoritedItemsJSON = localStorage.getItem("favoritedItems");
  return favoritedItemsJSON ? JSON.parse(favoritedItemsJSON) : [];
};

export const saveFavoritedItems = (favoritedItems: string[]): void => {
  localStorage.setItem("favoritedItems", JSON.stringify(favoritedItems));
};
