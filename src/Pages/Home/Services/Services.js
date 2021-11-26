import React from "react";

const services = [
  {
    image: "https://i.ibb.co/qL6CrvC/s1.png",
    name: "Fast & Free Delivery",
    description: "Free delivery on all orders",
  },
  {
    image: "https://i.ibb.co/jyLxVVK/s2.png",
    name: "Secure Payment",
    description: "Free delivery on all orders",
  },
  {
    image: "https://i.ibb.co/fS5qVRd/s3.png",
    name: "Money Back Gurantee",
    description: "Free delivery on all orders",
  },
  {
    image: "https://i.ibb.co/HxkZhGZ/s4.png",
    name: "Online Support",
    description: "Free delivery on all orders",
  },
];

const Services = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {services.map((service) => (
          <div key={service.image} className="col">
            <div className="card h-100 border-0">
              <img
                src={service.image}
                className="card-img-top m-auto"
                alt="..."
                style={{ width: "25%" }}
              />
              <div className="card-body">
                <h5
                  className="card-title text-primary"
                  style={{ fontWeight: "bold" }}
                >
                  {service.name}
                </h5>
                <p className="card-text text-secondary">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
