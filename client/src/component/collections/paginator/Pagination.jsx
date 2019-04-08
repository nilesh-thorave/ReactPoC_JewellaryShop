/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
class Pagination extends Component {
    
  renderPageNumber(numberOfPages, currentPage) {
    let pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(
        <li data-testid={i} className={(i===currentPage) ? "page-item active" : "page-item"} key={i} onClick={()=>this.props.onChangPage(i)}>
          <button className="btn-link page-link" href={undefined}>
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  }


  render() {
    const { totalNumberOfItems, itemsPerPage, currentPage } = this.props;
    const numberOfPages = Math.ceil(totalNumberOfItems / itemsPerPage);
    if (numberOfPages <= 1) {
      return null;
    } else {
      const pageNumbers = this.renderPageNumber(numberOfPages, currentPage);

      return (
        <React.Fragment>
          <nav aria-label="...">
            <ul className="pagination">
              <li className={ currentPage>1? "page-item" : "page-item disabled" } onClick={ ()=> (currentPage>1 ? this.props.onChangPage(Number(currentPage)-1): null)}>
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              { pageNumbers }
               <li className={ currentPage< numberOfPages? "page-item" : "page-item disabled" } onClick={ ()=> (currentPage< numberOfPages? this.props.onChangPage(Number(currentPage)+1): null)}>
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </React.Fragment>
      );
    }
  }
}

export default Pagination;
