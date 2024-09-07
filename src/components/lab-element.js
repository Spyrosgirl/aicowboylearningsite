import React from "react";

export const LabElement = () => {
  return (
    <div>
      <div className="lab-input-container">
        <label htmlFor="labTitle">Lab Title:</label>
        <input type="text" id="labTitle" name="labTitle" />
      </div>
      <div className="lab-input-container">
        <label htmlFor="labLink">Lab Link:</label>
        <input type="text" id="labLink" name="labLink" />
      </div>
    </div>
  );
};
