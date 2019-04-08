import React, { Component } from "react";
const Order = (props) => {
  const { item } = props.location.state || { item: null };
  if (!item) {
    return (
      <React.Fragment>
        {" "}
        <div className="mt-5"> Item is not selected....</div>
      </React.Fragment>
    );
  }
  const { title, price, image, metal, weight, id } = item;
  return (
    <React.Fragment>
      <div className="row mt-5 justify-content-center">
        <h3>
          You have ordered below product. Our representative will get back to
          you soon for further processing.
        </h3>
        <div className="card text-center border-light">
          <svg
            className="bd-placeholder-img card-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <image xlinkHref={image} width="100%" height="100%" />
          </svg>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Price: {price} ₹</h6>
            <h6>Metal: {metal}</h6>
            <h6>Weight: {weight}</h6>
            <h6>Id: {id}</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Order;
