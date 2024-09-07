import React from "react";
import { PageLayout } from "../components/page-layout";
//import { Courses } from "../components/courses_list";
export const AddLabPage = () => {
  return (
    <PageLayout>
      <label htmlFor="Lab">Lab Group Name:</label>
      <input type="text" id="labName" name="labName" />
      <br> </br>
    </PageLayout>
  );
};
