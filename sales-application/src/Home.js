import { Box, Grid } from "@mui/material";
import React from "react";
import BalanceCard from "./BalanceCard";

const SalesDataGridWidget = React.lazy(() =>
  import("datagrid/SalesDataGridWidget")
);
const AppLayout = React.lazy(() => import("ui/AppLayout"));
const SalesMapWidget = React.lazy(() => import("mapping/SalesMapWidget"));

const Home = () => {
  return (
    <React.Suspense>
      <AppLayout>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ minWidth: 275 }}>
              <BalanceCard />
            </Box>
          </Grid>
          {/* Map Widget */}
          <Grid item xs={12}>
            <React.Suspense>
              <SalesMapWidget />
            </React.Suspense>
          </Grid>

          {/* Data Grid */}
          <Grid item xs={12} sx={{ height: 400, width: "100%" }}>
            <React.Suspense>
              <SalesDataGridWidget />
            </React.Suspense>
          </Grid>
        </Grid>
      </AppLayout>
    </React.Suspense>
  );
};

export default Home;
