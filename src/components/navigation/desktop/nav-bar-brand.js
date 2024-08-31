import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://github.com/Spyrosgirl/aicowboylearningsite/blob/main/src/styles/components/Artboard%205-100.jpg"
          alt="aicowboyslogo"
        />
      </NavLink>
    </div>
  );
};
