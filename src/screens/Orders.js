import React from "react";
import Order from "../Components/Order";
import "./order.css";
import {useHistory} from 'react-router-dom'

function Orders() {
  const history = useHistory()
  return (
    <div className="container py-2">
      <div className='d-flex align-items-center justify-content-between mb-4 px-2'>
        <h5>Orders</h5>
        <button className='btn btn-success' onClick={()=> history.push('new-order')}> New Order</button>
      </div>
      {/* grid */}
      <div className='order__list'>  
          <Order />
          <Order />
          <Order />
      </div>
    </div>
  );
}

export default Orders;
