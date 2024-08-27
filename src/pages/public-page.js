import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";

const courses = [
  {
    courseID: 1,
    title: "deep learning for science and engineering",
    link: "https://drive.google.com/drive/folders/1gYCRlacUzgVr71hGGw51b5UwaItF0V5b?usp=drive_link",
    desc: "Course One Desc",
    price: "$2.00",
    owned: false,
  },
  {
    courseID: 2,
    title: "nvidia dli data science",
    link: "https://drive.google.com/drive/folders/1bIQISTier9NlpXNSHlgm10TxCs8msA9n?usp=drive_link",
    desc: "Course Two Desc",
    price: "$5.00",
    owned: true,
  },
  {
    courseID: 3,
    title: "nvidia dli deep",
    link: "https://drive.google.com/drive/folders/1dgGK5ABHKBH9foCXDjnHW5dnICmCmYsM?usp=drive_link",
    desc: "Course Three Desc",
    price: "$3.00",
    owned: false,
  },
];

export const PublicPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Your Courses
        </h1>
        <div className="content__body">
          {courses.map((course) =>
            course.owned ? (
              <CourseCodeSnippet
                key={course.courseID}
                title={course.title}
                desc={course.desc}
                price={course.price}
                link={course.link}
              />
            ) : null
          )}
        </div>
        <h2>More courses we think you would like</h2>
        <div className="content__body">
          {courses.map((course) =>
            !course.owned ? (
              <CourseCodeSnippet
                key={course.courseID}
                title={course.title}
                desc={course.desc}
                price={course.price}
                link={course.link}
              />
            ) : null
          )}
        </div>
      </div>
    </PageLayout>
  );
};
