import React from "react";

const SalesChartWidget = React.lazy(() => import("chart/SalesChartWidget"));
const AppLayout = React.lazy(() => import("ui/AppLayout"));

const Sales = () => {
  return (
    <React.Suspense>
      <AppLayout>
        <div>
          <SalesChartWidget title="Sales per Department" />
        </div>
      </AppLayout>
    </React.Suspense>
  );
};

export default Sales;
