import React from "react";
import "./order.css";

function Order() {
  return (
    <div className="shadow-sm bg-light p-3 m-2 rounded order__item d-flex align-items-center">
      <div className="icon_container bg-">
      <i class={'fa fa-shopping-cart'} aria-hidden="true"></i>
      </div>
      <div className="ml-2 p_s">
        <p className="text-muted">15 mins ago</p>
        <p className=" text-large">Ismail Musa</p>
      </div>
      <button className='btn ml-auto btn-info'>View</button>
    </div>
  );
}

export default Order;
