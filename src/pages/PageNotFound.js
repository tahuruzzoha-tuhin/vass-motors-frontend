import React from "react";
import { NavLink } from "react-router-dom";
import SectionBg from "./../assets/images/sectionBg5.png";
const NotFound = () => {
  return (
    <div
      style={{
        height: "91vh",
        background: `url(${SectionBg})`,
        backgroundAttachment: "fixed",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-center my-5">
        <h1 style={{ fontSize: "100px", color: "red" }}>404</h1>
        <h2 className="text-white">OPPS! PAGE NOT FOUND</h2>
        <h3 className="text-white">
          Sorry, the page you're looking for doesn't exist. you can return to
          home and look for another.
        </h3>
        <NavLink to="/home">
          <button className="btn btn-primary">Return to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
