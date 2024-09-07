import React from "react";
import { NavLink } from "react-router-dom";

export const CourseCodeSnippet = ({ title, desc, price, link, ID }) => {
  return (
    <NavLink to={link} end state={{ courseID: ID }} className="code-snippet">
      <div className="code-snippet__title">
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <div className="code-snippet__container">
        <div className="code-snippet__body">{desc}</div>
      </div>
    </NavLink>
  );
};
