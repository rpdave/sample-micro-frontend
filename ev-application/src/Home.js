import React from "react";
import { Grid } from "@mui/material";
import StatWidget from "./StatWidget";
import EvStationIcon from "@mui/icons-material/EvStation";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const MapWidget = React.lazy(() => import("map/Application"));
const DataGridWidget = React.lazy(() => import("datagrid/DataGridWidget"));
const AppLayout = React.lazy(() => import("ui/AppLayout"));

const Home = () => {
  return (
    <React.Suspense>
      <AppLayout>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={3}>
            <StatWidget
              title="EV Assets"
              icon={<LocalShippingIcon fontSize="large" color="info" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatWidget
              title="EV Stations"
              icon={<EvStationIcon fontSize="large" color="info" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatWidget
              title="Power Consumption"
              icon={<ElectricBoltIcon fontSize="large" color="warning" />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatWidget
              title="Personel"
              icon={<PeopleAltIcon fontSize="large" color="success" />}
            />
          </Grid>

          {/* Charts */}
          <Grid item xs={12}>
            <React.Suspense>
              <MapWidget title="Monthly Power Supply" />
            </React.Suspense>
          </Grid>

          {/* Data Grid */}
          <Grid item xs={12} sx={{ height: 400, width: "100%" }}>
            <React.Suspense>
              <DataGridWidget />
            </React.Suspense>
          </Grid>
        </Grid>
      </AppLayout>
    </React.Suspense>
  );
};

export default Home;
