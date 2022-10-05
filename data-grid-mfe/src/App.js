import { Grid } from "@mui/material";
import React from "react";

import DataGridWidget from "./DataGridWidget";

const App = () => {
  return (
    <Grid container mt={2}>
      <Grid item sx={{ height: 400, width: "100%" }}>
        <DataGridWidget />
      </Grid>
    </Grid>
  );
};

export default App;
