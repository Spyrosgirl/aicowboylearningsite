import React from "react";
import { PageLayout } from "../components/page-layout";
import { LabElement } from "../components/lab-element";
//import { Courses } from "../components/courses_list";
export const AddLabPage = () => {
  return (
    <PageLayout>
      <div>
        <label htmlFor="labName">Lab Group Name:</label>
        <input type="text" id="labName" name="labName" />
      </div>
      <LabElement> </LabElement>
    </PageLayout>
  );
};
