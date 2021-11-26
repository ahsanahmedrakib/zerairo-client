import React, { useRef, useState } from "react";

const AddProducts = () => {
  const imageRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const [success, setSuccess] = useState(false);
  const handleAddProducts = (e) => {
    e.preventDefault();

    const image = imageRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;

    const newProducts = { image, name, description, price };

    fetch("https://guarded-cliffs-66060.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      });
  };
  return (
    <div className="container">
      <form
        className="col-md-8 col-lg-8 p-3 m-auto"
        onSubmit={handleAddProducts}
      >
        <h2 className="mb-3">Add a product</h2>
        {success && ( 
           <div
           class="alert alert-success alert-dismissible fade show"
           role="alert"
         >
           Add product sucessfully
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
          name="image"
          ref={imageRef}
          placeholder="Enter product image link"
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Enter product name"
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          name="price"
          ref={priceRef}
          placeholder="Enter product price"
          id=""
          required
        />
        <textarea
          className="form-control mb-3"
          name="description"
          id=""
          placeholder="Enter product description"
          ref={descriptionRef}
          cols="30"
          rows="5"
          required
        />
        <button className="btn btn-secondary">Add</button>
      </form>
    </div>
  );
};

export default AddProducts;
