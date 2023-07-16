import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{backgroundColor: "white", height: "50px"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
