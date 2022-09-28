import React from "react";
import { NavMenuExpandable } from "ui/NavMenu";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const AssetsNavMenu = () => {
  const pages = [
    { title: "Dashboard", url: "/assets" },
    { title: "Create", url: "/assets/create" },
  ];
  return (
    <NavMenuExpandable
      text="Assets"
      icon={<LocalShippingOutlinedIcon />}
      pages={pages}
    />
  );
};

export default AssetsNavMenu;
