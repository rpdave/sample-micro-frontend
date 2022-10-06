import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const StatWidget = (props) => {
  return (
    <Paper sx={{ textAlign: "center", p: 1 }}>
      <Grid container justifyContent="space-around">
        <Grid item>
          {props.icon}
          <Typography sx={{ fontSize: 24 }}>{props.amount}</Typography>
          <Typography sx={{ fontSize: 12 }}>{props.heading}</Typography>
          <Typography sx={{ fontSize: 14 }} style={{ marginTop: "20px" }}>
            {props.subheading}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatWidget;
