import React from "react";

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin');
  };
  
  return (
    <button className="blueButton" onClick={handleClick}>
      Go to Admin Page
    </button>
  );
};
