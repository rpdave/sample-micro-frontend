import React from "react";
import { NavMenuExpandable } from "ui/NavMenu";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const AssetsNavMenu = () => {
  const pages = [{ title: "Assets", url: "/assets" }];
  return (
    <NavMenuExpandable
      text="Assets"
      icon={<LocalShippingOutlinedIcon />}
      pages={pages}
    />
  );
};

export default AssetsNavMenu;
