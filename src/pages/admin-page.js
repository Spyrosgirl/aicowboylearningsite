import React from "react";
import { PageLayout } from "../components/page-layout";

export const AdminPage = () => {
  return (
    <PageLayout>
      <div onClick="{ navigate('/adminCourses'); }"> Manage Course </div>
    </PageLayout>
  );
};
