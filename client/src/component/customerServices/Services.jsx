import React, { Component } from "react";
import img1 from "../../images/loanImage1.jpg";
import img2 from "../../images/savingImage1.jpg";
import img3 from "../../images/astrology1.jpg";

const Services = () => {
  return (
    <React.Fragment>
      <div className="row m-5">
        <div className="container marketing">
          {/* <!-- START THE FEATURETTES --> */}

          <div className="row featurette">
            <div className="col-md-9">
              <h2 className="featurette-heading">
                Gold Loans{" "}
                <span className="text-muted">
                  We offer maximum amount with minimum interest.
                </span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-3">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="300"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                <image xlinkHref={img1} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-9 order-md-2">
              <h2 className="featurette-heading">
                Saving Schemes{" "}
                <span className="text-muted">Save for your gold.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-3 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="300"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                <image xlinkHref={img2} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-9">
              <h2 className="featurette-heading">
                Astrologer <span className="text-muted">Foresee yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-3">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="300"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                <image xlinkHref={img3} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
