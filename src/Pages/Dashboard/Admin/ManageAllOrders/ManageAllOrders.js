import { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [mesage, setMessage] = useState(false);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    const url = "https://zerairo-server.onrender.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleUpdateStatus = (id) => {
    const url = `https://zerairo-server.onrender.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMessage(true);
        }
      });
  };

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://zerairo-server.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeleted(true);
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="my-3">Manage All Orders</h2>
      {mesage && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Update status successfully
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {deleted && (
        <div
          class="alert alert-danger alert-dismissible fade show"
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
      {orders.length === 0 ? (
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
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Shiping Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Order Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.productName}</td>
                  <td>{order.price}$</td>
                  <td>
                    {order.address}, {order.city}
                  </td>
                  <td>{order.phone}</td>
                  <td>{order.date.slice(0, 10)}</td>
                  <td>
                    {order.status === "Pending" ? (
                      <button
                        className="btn btn-warning"
                        onClick={() => handleUpdateStatus(order._id)}
                      >
                        Pending
                      </button>
                    ) : (
                      <button className="btn btn-success">Shipped</button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteOrder(order._id)}
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

export default ManageAllOrders;
