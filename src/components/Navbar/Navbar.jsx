import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Nithin Kavi</h1>
        <div className="info-bar">
          <p className="info-item">nithinkavi@college.harvard.edu</p>
        </div>
        <div className="info-bar">

          <Link classname = "info-link"
          to = {{pathname: "https://www.linkedin.com/in/nithin-kavi-0223641aa/"}}
          target = "_blank" >
          LinkedIn </Link>

          <Link classname = "info-link"
          to = {{pathname: "https://www.facebook.com/profile.php?id=100018949622140"}}
          target = "_blank" >
          Facebook </Link>

          <Link classname = "info-link"
          to = {{pathname: "https://github.com/thinkinavi24"}}
          target = "_blank" >
          Github </Link>


        </div>
      </div>
      <div className="nav-background">
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/experience" }}>Experience</Link>
        <Link to={{ pathname: "/education" }}>Education</Link>

      </div>
    </>
  );
}
