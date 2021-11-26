import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" exact to="/">
            <img
              src="https://i.ibb.co/cF177RH/logo-b-f.png"
              alt=""
              width="30"
              height="30"
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 my-navlink">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  activeStyle={{ color: "#0D6EFD" }}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  activeStyle={{ color: "#0D6EFD" }}
                  to="/explore"
                >
                  Explore
                </NavLink>
              </li>
            </ul>
            {user?.email ? (
              <ul className="navbar-nav ms-auto mb-lg-0 my-navlink">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    activeStyle={{ color: "red" }}
                    to="/dashboard"
                    style={{ marginTop: "-4px" }}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-navlink">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    activeStyle={{ color: "#0D6EFD" }}
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
