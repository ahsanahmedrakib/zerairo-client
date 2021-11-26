import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, registerWithEmail } = useAuth();

  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registerWithEmail(
      loginData.name,
      loginData.email,
      loginData.password,
      history
    );
  };

  return (
    <div>
      <Header />
      <div className="container col-lg-6 m-auto col-md-6 col-sm-8 my-5">
        <form className="border border-2 rounded p-5" onSubmit={handleSubmit}>
          <h2 className="mb-3">Regitster</h2>
          {user.email && (
            <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
           Registration succesfull
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          )}
          {error && (
           <div
           class="alert alert-success alert-dismissible fade show"
           role="alert"
         >
        {error}
           <button
             type="button"
             class="btn-close"
             data-bs-dismiss="alert"
             aria-label="Close"
           ></button>
         </div>
          )}
          <input
            className="form-control mb-3"
            type="text"
            onChange={handleOnChange}
            name="name"
            placeholder="Enter your name"
            id=""
          />
          <input
            className="form-control mb-3"
            type="email"
            onChange={handleOnChange}
            name="email"
            placeholder="Enter your email"
            id=""
          />
          <input
            className="form-control mb-3"
            type="password"
            onChange={handleOnChange}
            name="password"
            placeholder="Enter a password"
            id=""
          />
          <button className="btn btn-secondary">Register</button>
          <p>
            Already registered?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
