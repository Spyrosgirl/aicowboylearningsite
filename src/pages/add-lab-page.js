import React from "react";
import { PageLayout } from "../components/page-layout";
//import { Courses } from "../components/courses_list";
export const AddLabPage = () => {
  return (
    <PageLayout>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
    </PageLayout>
  );
};
