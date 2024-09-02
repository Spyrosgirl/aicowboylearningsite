import React from "react";
import { useLocation } from "react-router-dom";
import { PageLayout } from "../components/page-layout";
import { Dropdown } from "../components/buttons/dropdown";

/* pull specific import*/
import { Prereq } from "../components/courses/DLSE/prereq";
import { Mod1 } from "../components/courses/DLSE/module1";

export const CoursePage = () => {
const location = useLocation();
const { course } = location.state || {};
  return (
    <PageLayout>
      {/* Pull ID from Prev Page */}
      <h1 className="CourseTitle">
        Deep Learning for Science and Engineering Teaching Kit
      </h1>
      <p> ID: {course} </p>
      {/* Course PreReqs */}
      <Dropdown title="Course Prerequisites">
        <Prereq />
      </Dropdown>
      <Dropdown title="Module 1 - Basics">
        <Mod1 />
      </Dropdown>
      {/* Drop Downs for files */}
    </PageLayout>
  );
};
