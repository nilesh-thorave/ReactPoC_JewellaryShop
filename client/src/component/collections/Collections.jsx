import React, { Component } from "react";
import { Route } from "react-router-dom";

import Card from "./card/Card";
import './collections.css';
// import product from "../../services/product";
import Pagination from "./paginator/Pagination";

import {connect} from 'react-redux';
 import { getAllProducts } from '../../store/actions/productAction';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 12,
      currentPage: 1
    }
    this.hadleChangePage = this.hadleChangePage.bind(this);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }
  hadleChangePage(pageNumber){
    this.setState({currentPage: pageNumber});
  }
  render() {
    const { match } = this.props;
    const { error, isLoaded, products } = this.props.products;
    const {currentPage, itemsPerPage} = this.state;
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirsItem = indexOfLastItem - itemsPerPage;
    
    const currentItems = (products && products.length > 0) ? products.slice(indexOfFirsItem, indexOfLastItem) : [];
    if (error) {
      return (
        <div className="row m-5 justify-content-center">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return <div className="row m-5 justify-content-center">Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="row m-5 justify-content-center">
          <Route
              exact
              path={`${match.path}/:collection`}
              render={({ match }) => (
                <h2>{(match.params.collection).toUpperCase()} </h2>
              )}
            />
            <div className="card-columns">
              {currentItems.map(item => (
                <Card key={item.id} cardItem={item} />
              ))}
            </div>
          </div>
          <div className="row m-5 justify-content-center">
            <Pagination totalNumberOfItems={products.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onChangPage= { this.hadleChangePage}></Pagination>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state)=> {
return {
  products: state.product
}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getAllProducts: ()=> dispatch(getAllProducts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Collection);
