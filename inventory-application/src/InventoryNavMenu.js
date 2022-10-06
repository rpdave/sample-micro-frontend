import Inventory from "@mui/icons-material/Inventory";
import React from "react";
import { NavMenuExpandable } from "ui/NavMenu";

const InventoryNavMenu = () => {
  const pages = [{ title: "Dashboard", url: "/inventory" }];
  return (
    <NavMenuExpandable text="Inventory" icon={<Inventory />} pages={pages} />
  );
};

export default InventoryNavMenu;
