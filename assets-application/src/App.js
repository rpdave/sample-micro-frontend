import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Popper,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Grid item>
      Assets
      <Link to="/create">Create</Link>
    </Grid>
  );
};

export default App;
