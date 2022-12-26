import { Message, Notifications, Settings } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftContent">
        <Link to ="/" className="link"><span className="logo">React Admin Dashboard</span></Link>
        <input type="text" placeholder="search" />
      </div>

      <div className="rightContent">
        <div className="iconContainer">
            <div className="notificationBox">
            <span>1</span>
            <Notifications/>
            </div>
            <Message/>
            <Settings/>
        </div>
        <div className="adminDetails">
            <div className="adminContent">
            <h3>Christopher Ike</h3>
            <span>Admin</span>
            </div>
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
