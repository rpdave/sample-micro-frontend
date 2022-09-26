import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";

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

let index = 1;

const App = () => {
  const [dataRows, setDataRows] = useState(rows);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Generate new row of data
      const newRow = {
        id: index,
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        message: faker.hacker.phrase(),
      };
      index++;
      const newRows = [...dataRows, newRow];
      setDataRows(newRows);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dataRows]);

  return (
    <Grid container mt={2}>
      <Grid item sx={{ height: 400, width: "100%" }}>
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
      </Grid>
    </Grid>
  );
};

export default App;
