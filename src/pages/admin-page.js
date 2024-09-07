import React from "react";
import { PageLayout } from "../components/page-layout";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <div onClick="{ navigate('/adminCourses'); }"> Manage Course </div>
    </PageLayout>
  );
};
