import React from "react";

export const CourseCodeSnippet = ({ title, desc }) => (
  <div className="code-snippet">
    <span className="code-snippet__title">{title}</span>
    <div className="code-snippet__container">
      <div className="code-snippet__wrapper">
        <button className="code-snippet__body">{desc}</button>
      </div>
    </div>
  </div>
);
