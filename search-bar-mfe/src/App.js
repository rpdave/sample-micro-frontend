import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Popper,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "./useSearch";

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const searchRes = useSearch(searchTerm);
  console.log(searchRes);
  const id = open ? "simple-popper" : undefined;

  useEffect(() => {
    setAnchorEl(document.getElementById("text-input-search"));
  }, []);

  return (
    <Grid item>
      <TextField
        id="text-input-search"
        label="Search"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Popper
        id={id}
        open={searchRes?.length > 0}
        anchorEl={anchorEl}
        placement={"bottom"}
        sx={{ minWidth: "300px" }}
      >
        <Paper elevation={4}>
          <Grid container justifyContent="center" direction={"column"}>
            {searchRes?.map((item) => (
              <Grid item>
                <Typography sx={{ p: 1 }}>{item.term}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Popper>
    </Grid>
  );
};

export default App;
