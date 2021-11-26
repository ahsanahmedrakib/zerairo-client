import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="p-3 footer-link">
              <span className="d-block">
                <Link exact to="/">
                  HOME
                </Link>
              </span>
              <span className="d-block">
                <Link  to="/explore">
                  EXPLORE
                </Link>
              </span>
              <span className="d-block">
                <Link  to="/login">
                  LOGIN
                </Link>
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="p-3">
              <span className="d-block">
                {" "}
                <img
                  src="https://i.ibb.co/9ZrJw6q/logo-w-f.png"
                  style={{ width: "15%" }}
                  alt=""
                />
              </span>
              <img src="https://i.ibb.co/3c0xZYZ/s-bg.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="p-3 footer-social-icon">
              <span className="">
                <i className="fa fa-facebook text-center"></i>
              </span>
              <span className="">
                <i className="fa fa-twitter text-center"></i>
              </span>
              <span className="">
                <i className="fa fa-instagram text-center"></i>
              </span>
              <span className="">
                <i className="fa fa-linkedin text-center"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <hr className="text-light w-75 m-auto" />
          <p className="text-light mt-3">Designed and developed by <span className="text-success"><a style={{textDecoration: 'none', color: '#1C99E6'}} href="https://www.facebook.com/profile.php?id=100007230100901" target="_blank" rel="noreferrer">Ahsan Ahmed Rakib</a></span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
