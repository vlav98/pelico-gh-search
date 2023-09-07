// themes.js
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#CB997E",
      light: "#DDBEA9",
    },
    secondary: { main: "#A5A58D" },
    error: { main: "#B45555" },
    warning: { main: "#D8936E" },
    background: { default: "#FFE8D6" },
    text: { primary: "#100804", secondary: "#9F8170", disabled: "#8B8589" },
  },
});

export { customTheme };
