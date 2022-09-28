import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";

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
