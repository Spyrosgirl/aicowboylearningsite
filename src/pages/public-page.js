import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";
export const PublicPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Courses
        </h1>
        <div className="content__body">
          <CourseCodeSnippet title="Courses" desc="This is a course desc" />
        </div>
      </div>
    </PageLayout>
  );
};
