import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://raw.githubusercontent.com/Spyrosgirl/aicowboylearningsite/main/src/styles/components/logoSmall.png?token=GHSAT0AAAAAACWSGUA2HNX5IOBQGFOIZZTCZWLZEJQ"
          alt="aicowboyslogo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
