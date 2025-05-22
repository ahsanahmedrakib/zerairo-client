import { useRef, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
  // const [reviews, setReviews] = useState([])
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const nameRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const image = imageRef.current.value;
    const rating = ratingRef.current.value;
    const review = {
      name,
      image,
      rating,
    };
    fetch("https://zerairo-server.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h2 className="my-3">Submit a review</h2>

      <form className="col-lg-6 col-md-6 m-auto" onSubmit={handleSubmitReview}>
        {success && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Add review sucessfully
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
          ref={nameRef}
          name=""
          value={user.displayName}
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          ref={imageRef}
          name=""
          placeholder="Enter your profile picture link"
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="number"
          ref={ratingRef}
          name=""
          placeholder="Enter rating [0-5]"
          id=""
          min="1"
          max="5"
          required
        />
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default Review;
