import React from "react";
import "./order.css";
import ReactTimeAgo from "react-time-ago";
import {Link} from 'react-router-dom'

function Order({ data, id }) {
  return (
    <div className="shadow-sm bg-light p-3 m-2 rounded order__item d-flex align-items-center">
      <div className="icon_container bg-">
        <i class={"fa fa-shopping-cart"} aria-hidden="true"></i>
      </div>
      <div className="ml-2 p_s">
        <p className="text-muted">
          <ReactTimeAgo date={1855222400000} locale="en-US" />
        </p>
        <p className=" text-large">{data?.customer}</p>
      </div>
      <Link to={`order/${id}`} className="btn ml-auto btn-info">View</Link>
    </div>
  );
}

export default Order;
