import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>NotFound</div>
      <p>Back to the Home Page?</p>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFound;
