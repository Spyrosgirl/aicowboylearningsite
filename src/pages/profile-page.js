import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";

export const ProfilePage = () => {

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src="https://cdn.discordapp.com/attachments/669938270767153158/1266150062875082762/image.png?ex=66e0bea2&is=66df6d22&hm=00a283c2194b8c2eadfd76fc9f75ea2df0ee9e85b1191b7faaaadf689146c486&"
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">UserName</h2>
                <span className="profile__description">UserEmail</span>
              </div>
            </div>
            <div className="profile__details">
              <CodeSnippet
                title="Decoded ID Token"
                code="test"}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
