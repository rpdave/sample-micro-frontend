import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Sales vs Inventory 2022 Q1 and Q2",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const InventoryLineGraphWidget = () => {
  const inventoryStartingData = labels.map(() =>
    faker.datatype.number({ min: 0, max: 1000 })
  );

  const saleStartingData = labels.map(() =>
    faker.datatype.number({ min: 0, max: 500 })
  );
  const [inventoryData, setInventoryData] = useState(inventoryStartingData);
  const [saleData, setSaleData] = useState(saleStartingData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fakeInventoryData = labels.map(() =>
        faker.datatype.number({ min: 0, max: 500 })
      );

      const fakeSaleData = labels.map(() =>
        faker.datatype.number({ min: 0, max: 1000 })
      );

      setInventoryData(fakeInventoryData);
      setSaleData(fakeSaleData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inventoryData]);

  const data = {
    labels,
    datasets: [
      {
        label: "Inventory",
        data: inventoryData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Sales",
        data: saleData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default InventoryLineGraphWidget;
