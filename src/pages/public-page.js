import React from "react";
import { PageLayout } from "../components/page-layout";
export const PublicPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Courses
        </h1>
        <div className="content__body">This is a test</div>
      </div>
    </PageLayout>
  );
};
