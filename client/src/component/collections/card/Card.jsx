import React, { Component } from "react";
import CardOverLay from "./CardOverLay";
class Card extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      cardOverLayShow: false,
      hoverStyle: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleClick() {
    this.setState({ cardOverLayShow: !this.state.cardOverLayShow });
    this.handleMouseHover();
  }

  handleMouseHover(){
      this.setState({hoverStyle: !this.state.hoverStyle});
  }

  renderImage(image){
    return require(`${image}`);
  }
  render() {
    const { title, price, image } = this.props.cardItem;
    const hoverCss = {
        "boxShadow": "10px 10px 16px 12px rgba(0,0,0,0.2)"
    }
    // const img  = require(image);
    return (
      <React.Fragment>
          {this.state.cardOverLayShow ? <CardOverLay item={this.props.cardItem} closeOverlay={this.handleClick} /> : null }
        <div
          className="card text-center border-light m-3"
          style={(this.state.hoverStyle)? hoverCss : null}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {/* <img src="..." className="card-img" alt="..." />
           */}
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
            {/* <rect width="100%" height="100%" fill="#777" /> */}
          </svg>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Price: {price} ₹</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
