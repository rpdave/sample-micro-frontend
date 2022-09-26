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
import { useEventBus } from "shell/EventBus";
import { ShellLogEvent, IntentEvent } from "shell/Events";

const SearchItem = (props) => {
  const { searchItem } = props;

  const eventBus = useEventBus({
    domain: "Search",
    sourceComponent: "SearchApplication",
  });

  const handleClick = () => {
    // Fire off some kind of event here that the shell can pickup and use to navigate
    eventBus.emit(
      new ShellLogEvent({
        type: "track",
        event: "SEARCH_UPDATE_TERM_LOG",
        message: "User is typing into the search bad",
        payload: {
          value: searchItem,
        },
      })
    );

    eventBus.emit(
      new IntentEvent({
        intent: "navigate",
        path: searchItem.link,
      })
    );
  };
  return (
    <Grid
      item
      onClick={() => handleClick(searchItem)}
      sx={{ cursor: "pointer" }}
    >
      <Typography sx={{ p: 1 }}>{searchItem.term}</Typography>
    </Grid>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const searchRes = useSearch(searchTerm);
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
            {searchRes?.map((item, index) => (
              <SearchItem searchItem={item} key={index} />
            ))}
          </Grid>
        </Paper>
      </Popper>
    </Grid>
  );
};

export default App;
