import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";



function PositionPaginator(options) {
    // const handlePageChange = (pageNumber)=> {
    //    // console.log(`active page is ${pageNumber}`);
    //     // this.setState({activePage: pageNumber});
    //   }

    return(
        <div  className="">
        <Pagination
        //   activePage={1}
        //   itemsCountPerPage={10}
        //   totalItemsCount={450}
        //   pageRangeDisplayed={5}
        // //   onChange={handlePageChange}
        {...options}
        />
      </div>
        
    );
}

export default PositionPaginator