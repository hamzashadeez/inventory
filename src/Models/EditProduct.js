import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import firebase from "firebase";
import { db, storage } from "../utils/firebase";
import { useRecoilState } from "recoil";
import { EditData } from "../recoil/Edit";

function EditProduct({showEditProduct, ...props}) {

  const [image, setImage] = useRecoilState(EditData);
  const [name, setName] = useState('');
  const [price, setPrice] = useState("");
  const [btn, setBtn] = useState(true)
  
  const submit = async (e) => {
    e.preventDefault(); // Let's prevent refresh
    setBtn(false)
    
  };

 

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>
            <h4  className="text-center">Edit Product</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Product Name</Form.Text>
            <Form.Control
              placeholder="Product Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Product Price</Form.Text>
            <Form.Control
              placeholder="Product Price"
              type="number"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <button disabled={!btn} className="btn btn-success w-100">Update</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditProduct;
