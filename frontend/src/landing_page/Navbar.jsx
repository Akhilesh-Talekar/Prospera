import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { menuItems } from "../../constants";
import clsx from "clsx";

const Navbar = () => {
  const pathName = useLocation().pathname;
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom position-sticky top-0"
      style={{ backgroundColor: "#FFF", zIndex: 1000 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="media/Images/logo.svg"
            alt="Logo"
            style={{ height: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarSupportedContent"
        >
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item) => {
                const isActive = pathName === item.to;

                return (
                  <li className="nav-item" key={item.name}>
                    <Link
                      className={clsx("nav-link rounded-5 px-3", {
                        "bg-primary text-white": isActive,
                      })}
                      aria-current="page"
                      to={item.to}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
