import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Explore.css";

const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://guarded-cliffs-66060.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [allProducts]);
  return (
    <div>
      <Header />
      <div className="container my-5">
      <h2 style={{fontWeight:'bold'}}>
        Find Your Favourite <span className="text-primary">Watch</span>
      </h2>
      <p className="text-secondary mb-4">
        Choose your favourite watch from us.
      </p>
        {allProducts.length === 0 ? (
          <div className="d-flex justify-content-center">
            {" "}
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>{" "}
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {allProducts.map((product) => (
              <div key={product._id} className="col">
                <div className="card h-100 border-0" id="product">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-secondary">
                      {product.name}
                    </h2>
                    <p
                      className="card-text text"
                      style={{ textAlign: "justify" }}
                    >
                      {product.description}
                    </p>
                    <h4 className="card-text text-start text-primary">
                      {product.price} $
                    </h4>
                  </div>
                  <div className="card-footer border-0">
                    <Link to={`/purchase/${product._id}`}>
                      <button className="btn btn-outline-secondary">
                        Purchase
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
