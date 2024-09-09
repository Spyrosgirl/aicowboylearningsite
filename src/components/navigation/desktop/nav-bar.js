import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";

export const NavBar = () => {
  return (
    <>
      <link
        rel="icon"
        href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
        type="image/x-icon"
      />
      <div className="nav-bar__container">
        <nav className="nav-bar">
          <NavBarBrand />
          <h1 className="nav-bar__brandtitle">The Quantum Cowboys</h1>
          <NavBarTabs />
          <NavBarButtons />
        </nav>
      </div>
    </>
  );
};
