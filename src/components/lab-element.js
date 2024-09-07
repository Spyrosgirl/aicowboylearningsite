import React from "react";
import { NavLink } from "react-router-dom";

export const LabElement = () => {
  return (
    <div>
      <div>
        <label htmlFor="labTitle">Lab Title:</label>
        <input type="text" id="labTitle" name="labTitle" />
      </div>
      <div>
        <label htmlFor="labLink">Lab Link:</label>
        <input type="labLink" id="labLink" name="labLink" />
      </div>
    </div>
  );
};
