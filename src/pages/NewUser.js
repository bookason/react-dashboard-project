import React, { useState, useEffect, useRef } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewUser = ({postUsers, handleUpdate, displayname, displayImage, myForm, showuser}) => {
  
  
  return (
    <div className="newuser">
      <h2 style={{padding: "0 2rem"}}>Add users</h2>

      <div className="userContentBox">
        <div className="addUser">
          <form
            action=""
            className="newUserForm"
            onSubmit={postUsers}
            ref={myForm}
          >
            <input
              type="text"
              name="firstname"
              placeholder="first name"
              onChange={handleUpdate}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="last name"
              onChange={handleUpdate}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleUpdate}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="role"
              onChange={handleUpdate}
              required
            />
            <input
              type="text"
              name="profileurl"
              placeholder="profile url"
              onChange={handleUpdate}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "teal",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="newuserDetail">
          <h3>
            {showuser === false
              ? "Add new members to your team"
              : `You have successfully added ${displayname}`}
          </h3>

          <div className="userprofile">
            {showuser && <img src={displayImage} alt="" />}
          </div>

          <h4>{showuser === false ? "" : "You can still add more members"}</h4>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
