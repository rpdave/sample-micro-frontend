import Archive from "@mui/icons-material/Archive";
import DirectionsBoat from "@mui/icons-material/DirectionsBoat";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Receipt from "@mui/icons-material/Receipt";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import StatWidget from "./StatWidget";

const generateRandomNumber = (maxNumber) =>
  Math.floor(Math.random() * maxNumber);

const StatsPanel = () => {
  const [panelData, setPanelData] = useState({
    packed: 0,
    shipped: 0,
    delivered: 0,
    invoiced: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newPanelData = {
        packed: generateRandomNumber(50),
        shipped: generateRandomNumber(100),
        delivered: generateRandomNumber(1000),
        invoiced: generateRandomNumber(25),
      };

      //   const newPanelData = [...newPanelData, newRow];
      setPanelData(newPanelData);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [panelData]);

  return (
    <Grid item container spacing={2}>
      <Grid item xs={12} sm={2}>
        <StatWidget
          heading="Qty"
          subheading="TO BE PACKED"
          amount={panelData.packed}
          icon={<Archive fontSize="large" color="info" />}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <StatWidget
          heading="Qty"
          subheading="TO BE SHIPPED"
          amount={panelData.shipped}
          icon={<DirectionsBoat fontSize="large" color="info" />}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <StatWidget
          heading="Qty"
          subheading="TO BE DELIVERED"
          amount={panelData.delivered}
          icon={<LocalShipping fontSize="large" color="info" />}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <StatWidget
          heading="Qty"
          subheading="TO BE INVOICED"
          amount={panelData.invoiced}
          icon={<Receipt fontSize="large" color="info" />}
        />
      </Grid>
    </Grid>
  );
};

export default StatsPanel;
