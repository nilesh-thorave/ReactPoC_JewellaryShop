/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
      {/* <!-- FOOTER --> */}
      <footer className="container">
        <p className="float-right">
          <a href="#mainDiv">Back to top</a>
          <a href="#" className="fa fa-facebook" />
          <a href="#" className="fa fa-twitter" />
          <a href="#" className="fa fa-google" />
          <a href="#" className="fa fa-instagram" />
        </p>
        <p>
          &copy; 2017-2019 Company, Inc. &middot; <a>Privacy</a> &middot;{" "}
          <a>Terms</a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
