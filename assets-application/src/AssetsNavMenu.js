import React from "react";
import { NavMenuExpandable } from "superfleet_ui/NavMenu";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const AssetsNavMenu = () => {
  const pages = [{ title: "Assets", url: "/assets" }];
  return (
    <NavMenuExpandable
      text="Assets"
      icon={<LocalShippingIcon />}
      pages={pages}
    />
  );
};

export default AssetsNavMenu;
