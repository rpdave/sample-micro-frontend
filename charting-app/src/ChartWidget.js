import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useEventBus } from "sf_shell/EventBus";
import { NotificationEvent } from "sf_ui/Events";

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

const ChartWidget = (props) => {
  const bus = useEventBus({
    domain: "Charting",
    sourceComponent: "Home",
  });

  const [graphData, setGraphData] = useState([]);

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
        label: "Power Consumption",
        data: graphData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate some fake data
      const fakeData = labels.map(() =>
        faker.datatype.number({ min: 0, max: 1000 })
      );

      // If any value is greater than 900 send a notification
      if (fakeData.some((val) => val > 980)) {
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

  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        {props.title || "Please provide a title for the widget"}
      </Typography>
      <Line options={options} data={data} />
    </Paper>
  );
};

export default ChartWidget;
