/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import j1 from "../../images/jewellery-1.jpg";
import j2 from "../../images/jewellery-5.jpg";
// import j3 from "../images/jewellery-3.jpg";
import j4 from "../../images/jewellery-4.jpg";

import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img4.jpg";
import img4 from "../../images/img8.jpg";
import img5 from "../../images/img7.jpg";
import img6 from "../../images/img10.jpg";

class Home extends Component {
  state = {};
  render() {
    const corouselImages = [
      "../../images/jewellery-1.jpg",
      "../../images/jewellery-2.jpg",
      "../../images/jewellery-3.jpg"
    ];
    return (
      <React.Fragment>
        <div
          id="myCarousel"
          className="carousel slide w-100"
          data-ride="carousel"
          data-interval="2000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref={corouselImages[0]}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <image xlinkHref={j4} width="100%" height="100%" />
                {/* <rect width="100%" height="100%" fill="#777" /> */}
              </svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Example headline.</h1>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <Link className="btn btn-lg btn-primary" to="/signup" role="button">
                      Sign up today
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref={corouselImages[0]}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <image xlinkHref={j2} width="100%" height="100%" />
                {/* <rect width="100%" height="100%" fill="#777" /> */}
              </svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <Link className="btn btn-lg btn-primary" to="/about" role="button">
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref={corouselImages[0]}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <image xlinkHref={j1} width="100%" height="100%" />
                {/* <rect width="100%" height="100%" fill="#777" /> */}
              </svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>One more for good measure.</h1>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <Link className="btn btn-lg btn-primary" to="/collection" role="button">
                      Browse gallery
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">
          {/* <!-- START THE FEATURETTES --> */}

          {/*    <hr className="featurette-divider" /> */}

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#eee" />
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text> */}
                <image xlinkHref={img1} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#eee" />
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text> */}
                <image xlinkHref={img2} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 500x500"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#eee" />
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text> */}
                <image xlinkHref={img3} width="100%" height="100%" />
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* <!-- Three columns of text below the carousel --> */}
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#777" />
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text> */}
                <image xlinkHref={img4} width="100%" height="100%" />
              </svg>
              <h2>Silver</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#777" />
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text> */}
                <image xlinkHref={img5} width="100%" height="100%" />
              </svg>
              <h2>Gold</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <p>
                <a className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                {/* <rect width="100%" height="100%" fill="#777" />
                  <text x="50%" y="50%" fill="#777" dy=".3em">
                    140x140
                  </text> */}
                <image xlinkHref={img6} width="100%" height="100%" />
              </svg>
              <h2>Platinam</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh.
              </p>
              <p>
                <a className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
          </div>
          {/* <!-- /.row --> */}
          <hr className="featurette-divider" />

          {/*  <!-- /END THE FEATURETTES --> */}
        </div>
        {/* <!-- /.container --> */}
      </React.Fragment>
    );
  }
}

export default Home;
