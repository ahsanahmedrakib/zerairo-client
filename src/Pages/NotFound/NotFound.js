import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        className="img-fluid"
        src="https://i.ibb.co/zS3xk3M/not-found.jpg"
        alt=""
      />
      <button className="btn btn-warning" style={{ marginTop:'-70px'}}><Link exact to="/" style={{textDecoration: 'none', color: '#fff'}}>Go Home</Link></button>
    </div>
  );
};

export default NotFound;
