import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = ({toggleSidebar, selectedTab, setSelectedTab }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 const handleToggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
   toggleSidebar(); // Call toggleSidebar to update parent component (if needed)
   
 };
  
  return (
    <React.Fragment>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${
          isSidebarOpen ? "sidebar-open" : ""
        }`}
        style={{ width: "280px" }}
      >
        <div
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          style={{ cursor: "pointer" }}
        ></div>
        <a
          onClick={handleToggleSidebar}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className={`fs-4 ${isSidebarOpen ? "sidebar-name" : ""}`}>
            Sidebar
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
              onClick={() => setSelectedTab("Home")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/create-post"
              
              className={`nav-link text-white ${
                selectedTab === "Create-Post" && "active"
              }`}
              onClick={() => setSelectedTab("Create-Post")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
