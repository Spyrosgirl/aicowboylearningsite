import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import { LabElement } from "../components/lab-element";
//import { Courses } from "../components/courses_list";
export const AddLabPage = () => {
  const [labElements, setLabElem] = useState([<LabElement key={0} />]);

  const addLabElem = () => {
    setLabElem((prevElem) => [
      ...prevElem,
      <LabElement key={prevElem.length} />,
    ]);
  };
  return (
    <PageLayout>
      <div className="new-lab-container">
        <div className="lab-input-header">
          <label htmlFor="labName">Lab Group Name</label>
          <input type="text" id="labName" name="labName" />
        </div>
        {labElements}
        <button className="addLabElemButton" onClick={addLabElem}>
          Add Another Lab
        </button>
      </div>
    </PageLayout>
  );
};
