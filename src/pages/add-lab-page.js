import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import { LabElement } from "../components/lab-element";
//import { Courses } from "../components/courses_list";
export const AddLabPage = () => {
  const [labElements, setLabElem] = useState([{ id: Date.now() }]);

  const addLabElem = () => {
    setLabElem((prevElem) => [...prevElem, { id: Date.now() }]);
  };

  const deleteLabElem = (id) => {
    setLabElem((prevElem) => prevElem.filter((elem) => elem.id !== id));
  };
  return (
    <PageLayout>
      <div className="new-lab-container">
        <div className="lab-header">
          <div className="lab-input-header">
            <label htmlFor="labName">Lab Group Name</label>
            <input type="text" id="labName" name="labName" />
          </div>
          <div className="add-lab-button blueButton"> Add Lab Group </div>
        </div>
        {labElements.map((elem) => (
          <LabElement
            key={elem.id}
            index={elem.id}
            deleteLabElem={deleteLabElem}
            single={false} // or conditionally set to true based on your logic
          />
        ))}
        <div className="add-lab-elem-button blueButton" onClick={addLabElem}>
          Add Another Lab
        </div>
      </div>
    </PageLayout>
  );
};
