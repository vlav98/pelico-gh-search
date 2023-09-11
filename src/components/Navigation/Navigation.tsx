import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <AppBar position="fixed">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", mr: 1 },
                alignItems: "center",
              }}
            >
              <Link to={"/"}>
                <HomeIcon
                  style={{ color: "#FFF" }}
                  sx={{ display: "flex", mr: 1 }}
                ></HomeIcon>
              </Link>
              <Button
                component={Link}
                to={"/favorites"}
                variant="contained"
                color="primary"
              >
                Favorites
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navigation;
