import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const url = `https://zerairo-server.onrender.com/myorders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, orders]);

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
    <div className="container my-3">
      <h2>My orders</h2>{" "}
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
      {orders.length === 0 ? (
        <div className="text-center">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Order Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productName}</td>
                  <td>{order.price}$</td>
                  <td>{order.date.slice(0, 10)}</td>
                  {order.status === "Pending" ? (
                    <td className="text-warning">{order.status}</td>
                  ) : (
                    <td className="text-success">{order.status}</td>
                  )}
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

export default MyOrders;
