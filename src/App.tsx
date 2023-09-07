import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FavoritesList from "./screens/FavoritesList/FavoritesList";
import Home from "./screens/Home/Home";
import { customTheme } from "./theme";

function App() {
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
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
