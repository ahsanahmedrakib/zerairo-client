import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [message, setMessage] = useState(false);
  const [product, setProduct] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const productNameRef = useRef();
  const priceRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();

  //load a single product by id
  useEffect(() => {
    const url = `https://zerairo-server.onrender.com/purchase/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const productName = productNameRef.current.value;
    const price = priceRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const date = new Date();
    const orderInfo = {
      name,
      email,
      productName,
      price,
      phone,
      address,
      city,
      date,
      status: "Pending",
    };
    fetch("https://zerairo-server.onrender.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setMessage(true);
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="p-3">
              <div className="card">
                <img
                  className="img-fluid card-img-top"
                  src={product.image}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <form onSubmit={handlePlaceOrder}>
                <h2 className="mb-3">Please, provide your information</h2>
                {message && (
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    Place order successfully
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
                  name="name"
                  id=""
                  value={user.displayName}
                  ref={nameRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  name=""
                  id=""
                  value={user.email}
                  ref={emailRef}
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name=""
                  id=""
                  value={product.name}
                  ref={productNameRef}
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name=""
                  id=""
                  value={product.price}
                  ref={priceRef}
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="number"
                  name=""
                  id=""
                  ref={phoneRef}
                  placeholder="Entre your phone number"
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your address"
                  ref={addressRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your city"
                  ref={cityRef}
                  required
                />
                <button className="btn btn-info">Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
