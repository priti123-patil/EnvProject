import React from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";

function UserDetails() {
  return (
    <>
      <div className="main">

      <Sidebar/>
      
      <div style={{width: "100%"}}>
      <Navbar />
      <div className="container ud_container">
        <h3>Enter Details</h3>
        <div className="user_container">
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1" class="form-label">
              User name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Project Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter project name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Environment
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select the environment</option>
              <option value="1">SIT</option>
              <option value="2">PROD</option>
              <option value="3">DEV</option>
              <option value="4">UAT</option>
            </select>
          </div>

         {/* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Status
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your status</option>
              <option value="1">Completed</option>
              <option value="2">Not Completed</option>
            </select>
  </div>*/}

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Date
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="header">
            <div></div>
            <div>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserDetails;
