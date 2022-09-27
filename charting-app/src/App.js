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
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useEventBus } from "sf_shell/EventBus";
import { NotificationEvent } from "sf_ui/Events";

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

  const [graphData, setGraphData] = useState([]);

  const bus = useEventBus({
    domain: "Charting",
    sourceComponent: "Home",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate some fake data
      const fakeData = labels.map(() =>
        faker.datatype.number({ min: 0, max: 1000 })
      );

      // If any value is greater than 900 send a notification
      if (fakeData.some((val) => val > 900)) {
        bus.emit(
          new NotificationEvent({
            id: faker.random.alphaNumeric(),
            message: "Charting MFE generated a value larger than 900",
            read: false,
          })
        );
      }

      setGraphData(fakeData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [graphData]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: graphData,
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
          <Line options={options} data={data} />
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
