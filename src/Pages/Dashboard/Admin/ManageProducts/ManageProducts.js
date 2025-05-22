import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch("https://zerairo-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [allProducts]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://zerairo-server.onrender.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleted(true);
            const remainingOrders = allProducts.filter(
              (order) => order._id !== id
            );
            setAllProducts(remainingOrders);
          }
        });
    }
  };
  return (
    <div className="container">
      <h2 className="my-3">Manage Products</h2>
      {deleted && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Delete order successfully
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {allProducts.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Descrption</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product) => (
                <tr key={product._id}>
                  <th scope="row">{product.name}</th>
                  <td>{product.description}</td>
                  <td>{product.price}$</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
