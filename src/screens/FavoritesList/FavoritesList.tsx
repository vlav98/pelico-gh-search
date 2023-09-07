import { useState } from "react";
import FavoritedItem from "../../components/FavoritedItem/FavoritedItem";

function FavoritesList() {
  const [favorites, setFavorites] = useState([
    { id: 1, label: "Item 1", description: "Description 1", isFavorite: false },
    { id: 2, label: "Item 2", description: "Description 2", isFavorite: true },
  ]);

  const handleToggleFavorite = (itemId: number) => {
    const updatedFavorites = favorites.map((item) => {
      if (item.id === itemId) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });

    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h1>This is your list of favourites</h1>
      {favorites.map((item) => (
        <FavoritedItem
          key={item.id}
          label={item.label}
          description={item.description}
          isFavourite={item.isFavorite}
          onToggleFavorite={() => handleToggleFavorite(item.id)}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
