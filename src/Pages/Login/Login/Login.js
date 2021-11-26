import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

/* eslint-disable no-unused-expressions */

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, loading, loginWithEmail } = useAuth();

  const location = useLocation();
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
    loginWithEmail(loginData.email, loginData.password, location, history);
  };
  const redirect = location.state?.from || "/";

  useEffect(() => {
    user.email ? history.push(redirect) : "/";
  }, [user, history, redirect]);

  return (
    <div>
      <Header />
      <div className="container col-lg-6 m-auto col-md-6 col-sm-8 my-5">
        <form className="border border-2 rounded p-5" onSubmit={handleSubmit}>
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <h2 className="mb-3">Login</h2>
          {error && (
            <div
            class="alert alert-danger alert-dismissible fade show"
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
            type="email"
            name="email"
            placeholder="Enter your mail"
            onChange={handleOnChange}
            id=""
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleOnChange}
            id=""
          />
          <button className="btn btn-secondary">Login</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
