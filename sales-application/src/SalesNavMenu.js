import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import { NavMenuExpandable } from "ui/NavMenu";

const SalesNavMenu = () => {
  const pages = [
    { title: "Dashboard", url: "/sales" },
    { title: "Overview", url: "/sales/overview" },
  ];
  return (
    <NavMenuExpandable
      text="Sales"
      icon={<ShoppingBasketIcon />}
      pages={pages}
    />
  );
};

export default SalesNavMenu;
