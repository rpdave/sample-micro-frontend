import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const RichTextEditor = React.lazy(() => import("texteditor/Application"));

const App = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Paper sx={{ p: 3, textAlign: "center" }} elevation={4}>
          <Grid container direction={{ xs: "column", md: "row" }}>
            <Grid item sm={3}>
              <Doughnut
                options={{
                  responsive: false,
                  maintainAspectRatio: false,
                }}
                data={data}
              />
            </Grid>
            <Grid item sm>
              <React.Suspense fallback={<></>}>
                <RichTextEditor />
              </React.Suspense>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
