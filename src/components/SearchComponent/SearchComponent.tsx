import { useLazyQuery } from "@apollo/client";
import { TextField } from "@mui/material";
import { debounce } from "lodash";
import React, { useState } from "react";
import { SEARCH_REPOSITORIES_QUERY } from "../../graphql/queries/searchRepositories";
import { SearchResultsData, SearchResultsVariables } from "../../types/types";

interface SearchComponentProps {
  onSearchResults: (data: SearchResultsData) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearchResults,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [getSearchResults, { loading, error, data }] = useLazyQuery<
    SearchResultsData,
    SearchResultsVariables
  >(SEARCH_REPOSITORIES_QUERY);

  const debouncedSearch = debounce((query: string) => {
    getSearchResults({ variables: { query } });
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  React.useEffect(() => {
    console.log("data", data);
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
    </div>
  );
};

export default SearchComponent;
