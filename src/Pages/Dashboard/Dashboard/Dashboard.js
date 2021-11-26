import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProducts from "../Admin/AddProducts/AddProducts";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyOrders from "../User/MyOrders/MyOrders";
import Pay from "../User/Pay/Pay";
import Review from "../User/Review/UserReview";

const DashboardNav = () => {
  const { admin, loading, logOut } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
            {admin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/makeadmin`}
                  >
                    Make Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/manageallorders`}
                  >
                    Manage All Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/addproducts`}
                  >
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/manageproducts`}
                  >
                    Manage Products
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/myorders`}
                  >
                    My Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/review`}
                  >
                    Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`${url}/pay`}
                  >
                    Pay
                  </Link>
                </li>
              </ul>
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Switch>
        <Route exact path={`${path}`}>
          <DashboardHome></DashboardHome>
        </Route>
        {admin ? (
          <>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageallorders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addproducts`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>{" "}
          </>
        ) : (
          <>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>{" "}
          </>
        )}
      </Switch>
    </div>
  );
};

export default DashboardNav;
