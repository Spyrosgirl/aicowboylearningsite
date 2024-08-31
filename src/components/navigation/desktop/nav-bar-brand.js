import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="![aicowboy](https://raw.githubusercontent.com/Spyrosgirl/aicowboylearningsite/main/src/styles/components/Artboard%205-100.jpg?token=GHSAT0AAAAAACWSG34FVLLXABV6BK5EXPHEZWSNYQQ)"
          alt="aicowboyslogo"
        />
      </NavLink>
    </div>
  );
};
