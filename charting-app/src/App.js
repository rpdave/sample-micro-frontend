import React from "react";
import { Grid } from "@mui/material";

import ChartWidget from "./ChartWidget";

const RichTextEditor = React.lazy(() => import("texteditor/Application"));

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <ChartWidget title="Monthly Usage of something" />
      </Grid>
      <Grid item md={6} xs={12}>
        <React.Suspense fallback={<></>}>
          <RichTextEditor />
        </React.Suspense>
      </Grid>
    </Grid>
  );
};

export default App;
