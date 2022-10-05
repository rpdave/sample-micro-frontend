import { faker } from "@faker-js/faker";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useEventBus } from "shell/EventBus";
import { DataGridEvent } from "ui/Events";

const InventoryDataGridWidget = () => {
  const bus = useEventBus({
    domain: "Data Grid",
    sourceComponent: "Inventory Data Grid Widget",
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
      field: "message",
      headerName: "Message",
      width: 350,
    },
  ];

  const rows = [];

  const [dataRows, setDataRows] = useState(rows);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate new row of data
      const newRow = {
        id: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        department: faker.commerce.department(),
        city: faker.locales.en.address.city(),
        country: faker.locales.en.address.country(),
        quantity: Math.floor(Math.random() * 1000),
      };

      const newRows = [...dataRows, newRow];
      setDataRows(newRows);

      bus.emit(
        new DataGridEvent({
          ...newRow,
          type: "Inventory",
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

export default InventoryDataGridWidget;
