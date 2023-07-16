import React from "react";
import Navbar from "../Component/Navbar";
import "../utilities/style.css";
import TableRow from "../Component/TableRow";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

function Home() {
  return (
    <>
      <div className="main">
        <Sidebar />

        {/* Header */}
        <div style={{ width: "100%" }}>
          <Navbar />
          <div className="container">
            <Header />
            {/* details table */}
            <div className="mt-3" id="main_container">
              <table class="table table-hover">
                <thead id="table_head">
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">User</th>
                    <th scope="col">Environment</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Date</th>
                   {/*<th scope="col">Status</th> */}
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow />
                  <TableRow />
                  <TableRow />
                </tbody>
              </table>
            </div>
            {/* details table end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
