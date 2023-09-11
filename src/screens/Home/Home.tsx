import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FoundSearchedItem from "../../components/Items/FoundSearchedItem/FoundSearchedItem";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { SearchResultsData } from "../../types/types";

function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultsData | null>(
    null
  );

  const [favorites, setFavorites] = useState<string[]>([]);

  const handleSearchResults = (data: SearchResultsData): void => {
    setSearchResults(data);
  };

  const handleToggleFavorite = (itemId: string) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  const isFavorited = (itemId: string) => favorites.includes(itemId);

  useEffect(() => {
    const storedFavoritedItems = localStorage.getItem("favorites");
    if (storedFavoritedItems) {
      setFavorites(JSON.parse(storedFavoritedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Container>
      <Typography>This is home</Typography>
      <Container sx={{ alignItems: "center" }}>
        <SearchComponent
          onSearchResults={handleSearchResults}
          onToggleFavorite={handleToggleFavorite}
        />
        {searchResults &&
          searchResults.search &&
          searchResults.search.nodes && (
            <div>
              <Typography variant="h5">Search Results:</Typography>
              <ul>
                {searchResults.search.nodes.map((result) => (
                  <FoundSearchedItem
                    key={result.id}
                    label={result.name}
                    description={result.description}
                    onToggleFavorite={() => {
                      handleToggleFavorite(result.id);
                    }}
                    isFavourite={isFavorited(result.id)}
                  />
                ))}
              </ul>
            </div>
          )}
      </Container>
    </Container>
  );
}

export default Home;
