import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { db } from "../utils/firebase";
import AddCustomer from "../Models/AddCustomer";

function Customers() {
  const [show, setShow] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    db.collection("customers").onSnapshot((shot) => {
      setCustomers(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="container py-2">
      <AddCustomer
        show={show}
        onHide={() => setShow(false)}
        close={() => setShow(false)}
      />
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h5>Custormers</h5>
        <button className="btn btn-success" onClick={() => setShow(true)}>
          New Customer
        </button>
      </div>
      {/* grid */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={cust.id}>
              <td>{index + 1}</td>
              <td>{cust.data?.name}</td>
              <td>{cust.data?.last}</td>
              <td>{cust.data?.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
