import { faker } from "@faker-js/faker";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useEventBus } from "shell/EventBus";
import { DataGridEvent } from "ui/Events";

const SalesDataGridWidget = () => {
  const bus = useEventBus({
    domain: "Data Grid",
    sourceComponent: "Sales Data Grid Widget",
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "productName",
      headerName: "Product name",
      width: 350,
    },
    {
      field: "price",
      headerName: `Price ($)`,
      width: 100,
    },
  ];

  const rows = [];

  const [dataRows, setDataRows] = useState(rows);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate new row of data
      const newRow = {
        id: faker.git.shortSha(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
      };

      const newRows = [...dataRows, newRow];
      setDataRows(newRows);

      bus.emit(
        new DataGridEvent({
          ...newRow,
          type: "Sale",
        })
      );
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dataRows]);

  return (
    <DataGrid
      rows={dataRows}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 15, 20]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default SalesDataGridWidget;
