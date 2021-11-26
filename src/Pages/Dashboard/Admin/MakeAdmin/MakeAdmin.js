import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://guarded-cliffs-66060.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setMessage(true);
          setEmail("");
        }
      });
  };

  return (
    <div>
      <h2 className="my-3">Make admin</h2>
      <form className="col-lg-6 col-md-8 m-auto" onSubmit={handleMakeAdmin}>
        {message && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Make admin successfully
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
          name=""
          onBlur={handleOnBlur}
          placeholder="Enter an email"
          id=""
        />
        <button className="btn btn-primary">Make Now</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
