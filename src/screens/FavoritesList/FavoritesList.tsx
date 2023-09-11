import FavoritesList from "../../components/Items/FavoritesList/FavoritesList";

interface FavoritesListScreenProps {
  favorites: string[];
}
function FavoritesListScreen({ favorites }: FavoritesListScreenProps) {
  return (
    <div>
      <h1>This is your list of favourites</h1>
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default FavoritesListScreen;
