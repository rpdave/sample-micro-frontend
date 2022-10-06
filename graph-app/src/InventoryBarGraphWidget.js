import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Report",
    },
  },
};

const labels = [
  faker.commerce.department(),
  faker.commerce.department(),
  faker.commerce.department(),
  faker.commerce.department(),
  faker.commerce.department(),
  faker.commerce.department(),
  faker.commerce.department(),
];

const InventoryBarGraphWidget = () => {
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
        label: "Sold Quantity",
        data: saleData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Remaining Quantity",
        data: inventoryData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default InventoryBarGraphWidget;
