import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const RichTextEditor = React.lazy(() => import("texteditor/Application"));

const App = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => 500),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography>Monthly Usage</Typography>
          <Line options={options} data={data} />;
        </Paper>
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
