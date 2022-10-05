import { faker } from "@faker-js/faker";
import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const genFakeData = () => {
  return [
    ["Country", "Sales"],
    [faker.address.country(), faker.datatype.number({ min: 100, max: 10000 })],
    [faker.address.country(), faker.datatype.number({ min: 100, max: 10000 })],
    [faker.address.country(), faker.datatype.number({ min: 100, max: 10000 })],
    [faker.address.country(), faker.datatype.number({ min: 100, max: 10000 })],
    [faker.address.country(), faker.datatype.number({ min: 100, max: 10000 })],
  ];
};

const MapWidget = () => {
  const data = [
    ["Country", "Sales"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];

  const [mapData, setMapData] = useState(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate some fake data
      const fakeData = genFakeData();
      setMapData(fakeData);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [mapData]);

  return (
    <Grid container pt={2}>
      <Grid item md={6}>
        <Paper sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Sales in realtime
          </Typography>
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
    </Grid>
  );
};

export default MapWidget;
