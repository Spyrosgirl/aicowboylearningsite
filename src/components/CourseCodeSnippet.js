import React from "react";
import { NavLink } from "react-router-dom";

export const CourseCodeSnippet = ({ title, desc, price, link }) => {
  return (
    <NavLink
        to={path}
        end
        className={({ isActive }) =>
          "nav-bar__tab " + (isActive ? "nav-bar__tab--active" : "")
        }
      >
      <div className="code-snippet">
        <div className="code-snippet__title">
          <span>{title}</span>
          <span>{price}</span>
        </div>
        <div className="code-snippet__container">
          <div className="code-snippet__body">{desc}</div>
        </div>
      </div>
    </NavLink>
  );
};
