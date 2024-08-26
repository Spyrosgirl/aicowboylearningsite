import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";

export const PublicPage = () => {
  const [message, setMessage] = useState("");
  console.log(message["text"]);

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getPublicResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Courses
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page will retrieve all courses from the list of courses
            </span>
            <span>
              <strong>Any visitor can access this page </strong>
              but only registered users can purchase and see their courses
            </span>
          </p>
          <CodeSnippet title="Courses" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};
