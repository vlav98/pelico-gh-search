import { TextField } from "@mui/material";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      This is home
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

export default Home;
