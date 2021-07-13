import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { db } from "../utils/firebase";
import firebase from "firebase";

function AddCustomer({ close, ...props }) {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (name !== "" && last !== "") {
      db.collection("customers")
        .add({
          name,
          last,
          address,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          close();
        });
    }
  };
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Add New Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">First Name</Form.Text>
            <Form.Control
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Last Name</Form.Text>
            <Form.Control
              placeholder="Last Name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Address</Form.Text>
            <Form.Control
              placeholder="Customer's Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <button className="btn btn-success w-100">Submit</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddCustomer;
