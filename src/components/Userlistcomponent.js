import { Email, EmailOutlined } from "@mui/icons-material";
import React from "react";

const Userlistcomponent = ({ item }) => {
  return (
    <div className="userlistcomponent">
      <div className="userlistImg">
        <img src={item.profileurl} alt="" />
      </div>

      <div className="userlistDetails">
        <div className="leftcontent">
        <h3>{item.firstname} {item.lastname}</h3>
        <h5>Role: {item.role}</h5>
        <h5><EmailOutlined/> {item.email}</h5>
        </div>
        <div className="rightcontent"></div>
       
      </div>

    </div>
  );
};

export default Userlistcomponent;
