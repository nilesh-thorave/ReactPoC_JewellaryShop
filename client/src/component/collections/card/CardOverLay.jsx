import React, { Component } from "react";
import './cardOverLay.css';

import {Redirect} from 'react-router-dom';

class CardOverLay extends Component {
  constructor(props){
    super(props);
    this.state={ renderOrderFlag : false}
    this.handleOrder = this.handleOrder.bind(this)
  }

  handleOrder(event){
    event.stopPropagation();
    this.setState({renderOrderFlag : true});
    
  }
  render() {
    const { title, price, image, metal, weight, id } = this.props.item;
    if(this.state.renderOrderFlag){
      return (
        <Redirect to={{
          pathname: '/order',
          state: { item: this.props.item }
      }} />
      )
    }
   
    return (
      <div id="overlay" onClick={ this.props.closeOverlay}>
        <div id="text">
        <div
          className="card text-center border-light"
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
            <h6>Metal: { metal }</h6>
            <h6>Weight: { weight }</h6>
            <h6>Id: { id }</h6>
            <button className="btn btn-success btn-sm" onClick={this.handleOrder} > Order </button>
          </div>
        </div>
      
        
        </div>
      </div>
    );
  }
}

export default CardOverLay;
