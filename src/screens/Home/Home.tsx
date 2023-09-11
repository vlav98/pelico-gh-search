import { Container, Typography } from "@mui/material";
import { useState } from "react";
import FoundSearchedItem from "../../components/Items/FoundSearchedItem/FoundSearchedItem";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { SearchResult, SearchResultsData } from "../../types/types";

function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultsData | null>(
    null
  );

  const [favorites, setFavorites] = useState<SearchResult[]>([]);

  const handleSearchResults = (data: SearchResultsData): void => {
    setSearchResults(data);
  };

  const toggleFavorite = (item: SearchResult) => {
    if (favorites.some((favorite) => favorite.id === item.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <Container>
      <Typography>This is home</Typography>
      <Container sx={{ alignItems: "center" }}>
        <SearchComponent onSearchResults={handleSearchResults} />
        {searchResults &&
          searchResults.search &&
          searchResults.search.nodes && (
            <div>
              <Typography variant="h5">Search Results:</Typography>
              <ul>
                {searchResults.search.nodes.map((result) => (
                  <FoundSearchedItem
                    label={result.name}
                    description={result.description}
                    onToggleFavorite={() => {
                      toggleFavorite(result);
                    }}
                    isFavourite={false}
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
