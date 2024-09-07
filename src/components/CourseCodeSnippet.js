import React from "react";
import { NavLink } from "react-router-dom";

export const CourseCodeSnippet = ({ title, desc, price, link, ID }) => {
  return (
    <NavLink to={link} end state={{ courseID: ID }} className="code-snippet">
      <div onClick="{ navigate('/adminCourses'); }"> Manage Course </div>
    </NavLink>
  );
};
