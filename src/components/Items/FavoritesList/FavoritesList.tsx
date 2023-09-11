import { useState } from "react";
import { FavoritesItemsData } from "../../../types/types";
import FavoritedItem from "../FavoritedItem/FavoritedItem";

interface FavoriteItemProps {
  favorites: string[];
}

const FavoritesList: React.FC<FavoriteItemProps> = () => {
  const [favorites, setFavorites] = useState<FavoritesItemsData>({ items: [] });

  const handleToggleFavorite = (
    itemId: string,
    label: string,
    description: string
  ) => {
    setFavorites((prevFavorites) => {
      const existingItem = prevFavorites.items.find(
        (item) => item.id === itemId
      );

      if (existingItem) {
        const updatedItems = prevFavorites.items.map((item) =>
          item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
        );

        return { items: updatedItems };
      } else {
        const newItem = {
          id: itemId,
          name: label,
          description: description,
          isFavorite: true,
        };

        return { items: [...prevFavorites.items, newItem] };
      }
    });
  };

  return (
    <div>
      {favorites &&
        favorites.items &&
        favorites.items.map((item) => (
          <FavoritedItem
            key={item.id}
            label={item.name}
            description={item.description}
            isFavourite={item.isFavorite}
            onToggleFavorite={() =>
              handleToggleFavorite(item.id, item.name, item.description)
            }
          />
        ))}
    </div>
  );
};

export default FavoritesList;
