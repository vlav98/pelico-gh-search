import { useLazyQuery } from "@apollo/client";
import { TextField, Typography } from "@mui/material";
import { debounce } from "lodash";
import React, { useState } from "react";
import { SEARCH_REPOSITORIES_QUERY } from "../../graphql/queries/searchRepositories";
import { SearchResultsData, SearchResultsVariables } from "../../types/types";
import FoundSearchedItem from "../Items/FoundSearchedItem/FoundSearchedItem";

interface SearchComponentProps {
  onSearchResults: (data: SearchResultsData) => void;
  onToggleFavorite: (itemId: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearchResults,
  onToggleFavorite,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultsData | null>(
    null
  );

  const handleSearchResults = (data: SearchResultsData): void => {
    setSearchResults(data);
  };

  const [getSearchResults, { loading, error, data }] = useLazyQuery<
    SearchResultsData,
    SearchResultsVariables
  >(SEARCH_REPOSITORIES_QUERY);

  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (itemId: string) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }

    onToggleFavorite(itemId);
  };

  const debouncedSearch = debounce((query: string) => {
    getSearchResults({ variables: { query } });
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  React.useEffect(() => {
    if (data) {
      onSearchResults(data);
    }
  }, [data, onSearchResults]);

  return (
    <div>
      <TextField
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchResults && searchResults.search && searchResults.search.nodes && (
        <div>
          <Typography variant="h5">Search Results:</Typography>
          <ul>
            {searchResults.search.nodes.map((result) => (
              <FoundSearchedItem
                key={result.id}
                label={result.name}
                description={result.description}
                onToggleFavorite={() => {
                  toggleFavorite(result.id);
                }}
                isFavourite={favorites.includes(result.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
