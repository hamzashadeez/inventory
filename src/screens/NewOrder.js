import React from "react";
import "./newOrder.css";
import Table from "react-bootstrap/Table";

function NewOrder() {
  return (
    <div className="container pt-2">
      <div className="d-flex align-items-center justify-content-between">
        <h6>New Order</h6>
        <button className="btn btn-success">Back</button>
      </div>
      {/* main */}
      <div className="order__main_div">
        <div className="bg-white shadow-sm rounded p-4 form_P">
          <label>Select Customer</label>
          <select className="btn mb-4">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          {/* add Product */}
          <div className="d-flex align-items-center justify-content-between pro_duct mb-4">
            <p>Add Product</p>
            <button>+</button>
          </div>

          {/* Product Data */}
          {/* <Table striped hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr> */}
            {/* </thead>
            <tbody> */}
              {/* {customers.map((cust, index) => (
            <tr key={cust.id}>
              <td>{index + 1}</td>
              <td>{cust.data?.name}</td>
              <td>{cust.data?.last}</td>
              <td>{cust.data?.address}</td>
            </tr> */}
              {/* ))} */}
            {/* </tbody>
          </Table> */}

        </div>
        <div className="bg-white shadow-sm rounded submit_order">
          <button className="btn btn-success">Submit Order</button>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
