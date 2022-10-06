import { faker } from "@faker-js/faker";
import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const genFakeData = () => {
  return [
    ["Country", "Population"],
    ["Germany", faker.datatype.number({ min: 10, max: 10000 })],
    ["United States", faker.datatype.number({ min: 10, max: 10000 })],
    ["Brazil", faker.datatype.number({ min: 10, max: 10000 })],
    ["Canada", faker.datatype.number({ min: 10, max: 10000 })],
    ["France", faker.datatype.number({ min: 10, max: 10000 })],
    ["RU", faker.datatype.number({ min: 10, max: 10000 })],
  ];
};

const MapWidget = () => {
  const data = [
    ["Country", "Population"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];

  const [mapData, setMapData] = useState(data);
  const [mapData2, setMapData2] = useState(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate some fake data
      const fakeData = genFakeData();
      const fakeData2 = genFakeData();

      setMapData(fakeData);
      setMapData2(fakeData2);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [mapData]);

  return (
    <Grid container pt={2} spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={mapData}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={mapData2}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MapWidget;
