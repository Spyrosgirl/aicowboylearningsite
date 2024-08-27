import React from "react";
import { PageLayout } from "../components/page-layout";

courses : [
  {courseID: 0001, title: "deep learning for science and engineering", price: "$2.00", owned: False},
  {courseID: 0002, title: "nvidia dli data science", price: "$5.00", owned: True},
  {courseID: 0003, title: "nvidia dli deep", price: "$3.00", owned: False},
]

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
