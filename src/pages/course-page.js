import React from "react";
import { PageLayout } from "../components/page-layout";
import { Dropdown } from "../components/dropdown";
import { Prereq } from "../DLSE/prereq";

export const CoursePage = () => {

  return (
    <PageLayout>
    // Pull ID from Prev Page
    <h1 className="CourseTitle">
      Deep Learning for Science and Engineering Teaching Kit
    </h1>
    // Course PreReqs
    <Dropdown title="Course Prerequisites">
      <Prereq>
      </Prereq>
    </Dropdown>
    // Drop Downs for files
    </PageLayout>
  );
};
