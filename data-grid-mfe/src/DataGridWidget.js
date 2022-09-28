import React, { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";

const DataGridWidget = () => {
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
        id: faker.git.shortSha(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        message: faker.hacker.phrase(),
      };

      const newRows = [...dataRows, newRow];
      setDataRows(newRows);
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

export default DataGridWidget;
