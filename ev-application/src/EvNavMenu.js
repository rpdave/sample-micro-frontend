import React from "react";
import { NavMenuExpandable } from "ui/NavMenu";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";

const EvNavMenu = () => {
  const pages = [
    { title: "Dashboard", url: "/ev" },
    // { title: "Create", url: "/assets/create" },
  ];
  return (
    <NavMenuExpandable
      text="EV"
      icon={<EvStationOutlinedIcon />}
      pages={pages}
    />
  );
};

export default EvNavMenu;
