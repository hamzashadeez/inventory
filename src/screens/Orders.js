import React, {useState, useEffect} from "react";
import Order from "../Components/Order";
import "./order.css";
import { db } from "../utils/firebase";
import {useHistory} from 'react-router-dom'

function Orders() {
  const history = useHistory();

  const [orders, setOrders] = useState([])

  useEffect(() => {
    db.collection("orders").onSnapshot((shot) => {
      setOrders(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="container py-2">
      <div className='d-flex align-items-center justify-content-between mb-4 px-2'>
        <h5>Orders</h5>
        <button className='btn btn-success' onClick={()=> history.push('new-order')}> New Order</button>
      </div>
      {/* grid */}
      <div className='order__list'>  
          {orders.map(order => <Order key={order.id} id={order.id} data={order.data} /> )}
      </div>
    </div>
  );
}

export default Orders;
