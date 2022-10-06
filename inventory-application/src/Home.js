import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StatsPanel from "./StatsPanel";

const AppLayout = React.lazy(() => import("ui/AppLayout"));
const InventoryBarGraphWidget = React.lazy(() =>
  import("graphing/InventoryBarGraphWidget")
);
const InventoryLineGraphWidget = React.lazy(() =>
  import("graphing/InventoryLineGraphWidget")
);

const Home = () => {
  return (
    <React.Suspense>
      <AppLayout>
        <Grid container spacing={2}>
          <Grid item xl={10} sm={6}>
            <Typography variant="h4" style={{ marginBottom: "1em" }}>
              Inventory Activity
            </Typography>
            <StatsPanel />
          </Grid>
          <Grid item xl={10} sm={6}>
            <Typography variant="h4" style={{ marginTop: "2em" }}>
              Inventory Reports
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ width: 1 / 2, marginRight: "100px" }}>
                <InventoryBarGraphWidget />
              </Box>
              <Box sx={{ width: 1 / 2, maxHeight: "500px", bgColor: "black" }}>
                <InventoryLineGraphWidget />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </AppLayout>
    </React.Suspense>
  );
};

export default Home;
