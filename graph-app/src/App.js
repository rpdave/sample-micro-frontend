import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const [graphData, setGraphData] = useState([]);
  const [graph2Data, setGraph2Data] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate some fake data
      const fakeData = labels.map(() =>
        faker.datatype.number({ min: 0, max: 1000 })
      );
      const fake2Data = labels.map(() =>
        faker.datatype.number({ min: -100, max: 1000 })
      );

      setGraphData(fakeData);
      setGraph2Data(fake2Data);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [graphData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: graphData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: graph2Data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Grid container pt={2} spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography>Yearly Usage</Typography>
          <Line options={options} data={data} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography>Yearly Usage</Typography>
          <Line options={options} data={data} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
