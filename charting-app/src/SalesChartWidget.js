import { faker } from "@faker-js/faker";
import { Paper, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChartWidget = (props) => {
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
    faker.commerce.department(),
    faker.commerce.department(),
    faker.commerce.department(),
    faker.commerce.department(),
    faker.commerce.department(),
  ];

  const data = {
    labels,
    datasets: [
      {
        data: graphData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fakeData = labels.map(() =>
        faker.datatype.number({ min: 1, max: 1000 })
      );
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
      <Pie options={options} data={data} />
    </Paper>
  );
};

export default SalesChartWidget;
