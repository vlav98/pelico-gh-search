import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FavoritesList from "./screens/FavoritesList/FavoritesList";
import Home from "./screens/Home/Home";
import { customTheme } from "./theme";
import { getFavoritedItems } from "./utils/localStorage";

function App() {
  const [favorites, setFavorites] = useState<string[]>(getFavoritedItems());

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemId: string) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <BrowserRouter>
      <Navigation />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "64px",
          backgroundColor: customTheme.palette.background.default,
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={<FavoritesList favorites={favorites} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
