import React from "react";
import home from "../utilities/images/home.png";
import userdetails from "../utilities/images/list.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_logo">Trident Blue</div>

        <div className="nav_item">
          <div>
            <img
              src={home}
              className="black_to_white"
              height="17"
              alt=""
              srcset=""
              style={{ marginRight: "5px" }}
            />
          </div>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="mt-1" style={{color: "white"}}>Dashboard</div>
          </NavLink>
        </div>

        <div className="nav_item ">
          <div>
            <img
              src={userdetails}
              className="black_to_white"
              height="17"
              alt=""
              srcset=""
              style={{ marginRight: "5px" }}
            />
          </div>
          <NavLink to="/userdetails" style={{ textDecoration: "none" }}>
            <div className="mt-1" style={{color: "white"}}>User Details</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
