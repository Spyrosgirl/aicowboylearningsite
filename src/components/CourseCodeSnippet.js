import React from "react";

export const CourseCodeSnippet = ({ title, desc, price }) => (
  <button className="code-snippet">
    <span className="code-snippet__title">{title}</span>
    <span className="code-snippet__title">{price}</span>
    <div className="code-snippet__container">
      <div className="code-snippet__wrapper">
        <button className="code-snippet__body">{desc}</button>
      </div>
    </div>
  </button>
);
