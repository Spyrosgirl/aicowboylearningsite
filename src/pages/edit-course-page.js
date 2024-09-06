import React from "react";
import { useLocation } from "react-router-dom";
import { PageLayout } from "../components/page-layout";
import { Dropdown } from "../components/buttons/dropdown";
import { Prereq } from "../components/courses/DLSE/prereq";
import { Mod1 } from "../components/courses/DLSE/module1";
import { Courses } from "../components/courses_list";

export const EditCoursePage = () => {
  const location = useLocation();
  const { courseID } = location.state || {};
  return (
    <PageLayout>
      {/* Pull ID from Prev Page */}
      <h1 className="CourseTitle">
        {Courses.find((course) => course.courseID === courseID).title}
      </h1>
      {/* Course PreReqs */}
      <Dropdown title="Course Prerequisites">
        <Prereq edit="true" />
      </Dropdown>
      <Dropdown title="Module 1 - Basics">
        <Mod1 id={courseID} edit="true" />
      </Dropdown>
      {/* Drop Downs for files */}
    </PageLayout>
  );
};
