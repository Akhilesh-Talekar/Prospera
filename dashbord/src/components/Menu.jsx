import React from "react";
import { Link } from "react-router-dom";
import { menu_items } from "../../constants";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import { HomeContext } from "./HomeContext";

const Menu = () => {
  const {user} = React.useContext(HomeContext);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const pathName = useLocation().pathname;

  const handleProflieDropDown = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  }

  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {menu_items.map((item) => {
            const isActive = pathName === item.to;
            return(
              <li key={item.name}><Link to={item.to} className={clsx("menu",{"selected":isActive})}>{item.name}</Link></li>
            )
          })}
        </ul>
        <hr className="custom-line"/>
        <div className="profile" onClick={handleProflieDropDown}>
          <div className="avatar">{user[0]}</div>
          <p className="username">{user}</p>
        </div>
        {isProfileDropDownOpen && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Menu;

const ProfileDropDown = () => {
  const { logOut } = React.useContext(HomeContext);
  return (
    <div
      className="profile-dropdown"
      style={{
        position: "absolute",
        top: "10%",
        right: "1%",
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "1rem",
          width: "180px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          borderRadius: "0.5rem",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#333",
            textAlign: "left",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <i className="fas fa-user"></i>
          View Profile
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#333",
            textAlign: "left",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <i className="fas fa-cog"></i>
          Settings
        </button>
        <button
          onClick={logOut}
          style={{
            background: "transparent",
            border: "none",
            color: "#333",
            textAlign: "left",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  );
}