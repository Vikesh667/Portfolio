import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <div className="profile">
          <a href="https://www.linkedin.com/in/vikesh-kumar-kushwaha-b688b8187/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/> </a>
          </div>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Education </Link>
        <Link to="/mySkills"> mySkills </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
