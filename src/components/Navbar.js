import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import bars from "@iconify/icons-mdi/menu";
import close from "@iconify/icons-mdi/close";
// import Sidebar from "./Sidebar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div class="navbar">
        <Link to="#" className="menu-bars">
          <Icon icon={bars} className="menu" onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li class="navbar-toggle">
            <Link to="#" className="menu-bars">
              <Icon icon={close} className="close" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
