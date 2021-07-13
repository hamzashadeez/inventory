import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { db } from "../utils/firebase";

function Order() {
  let { id } = useParams();
  const history = useHistory();
  const [RData, setRData] = useState({});

  useEffect(() => {
    db.collection("orders")
      .doc(id)
      .get()
      .then((data) => {
        setRData(data.data());
      });
  }, []);

  const deleteOrder = async () => {
    await db
      .collection("orders")
      .doc(id)
      .delete()
      .then(() => {
        alert("Order Deleted");
        history.push('/orders')
      });
  };


  return (
    <div className="container pt-2">
       <div className=" align-items-center justify-content-between d-flex mb-2">
        <h5 className='text-center mb-3'>Order #<span style={{fontWeight: "lighter"}}>{id}</span></h5>
        <button className="btn btn-danger" onClick={() => deleteOrder()}>
          Delete Order
        </button>
      </div>
      {/* Body */}
      <div>
        
      </div>
    </div>
  );
}

export default Order;
