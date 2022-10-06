import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const StatWidget = (props) => {
  return (
    <Paper sx={{ textAlign: "center", p: 2 }}>
      <Grid container justifyContent="space-around">
        <Grid item>{props.icon}</Grid>
        <Grid item>
          <Typography>{props.title}</Typography>
          <Typography>350</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatWidget;
