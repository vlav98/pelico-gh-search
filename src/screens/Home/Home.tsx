import { Container, Typography } from "@mui/material";
import { useState } from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { SearchResultsData } from "../../types/types";

function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultsData | null>(
    null
  );

  const handleSearchResults = (data: SearchResultsData): void => {
    console.log("data handlesearchres", data);
    data && data.search
      ? data.search.map((result) => console.log(result))
      : console.log("data", data);
    setSearchResults(data);
  };

  return (
    <Container>
      <Typography>This is home</Typography>
      <Container sx={{ alignItems: "center" }}>
        <SearchComponent onSearchResults={handleSearchResults} />

        {searchResults && (
          <div>
            <Typography variant="h5">Search Results:</Typography>
            <ul>
              {searchResults && searchResults.search
                ? searchResults.search.map((result) => (
                    <li key={result.id}>{result.name}</li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Home;
