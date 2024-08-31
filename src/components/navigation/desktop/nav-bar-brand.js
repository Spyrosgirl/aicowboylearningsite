import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src=".../styles/components/Artboard_18.png"
          alt="aicowboyslogo"
        />
      </NavLink>
    </div>
  );
};
