import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import firebase from "firebase";
import { db, storage } from "../utils/firebase";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState("");
  const [btn, setBtn] = useState(true)

  const submit = async (e) => {
    e.preventDefault(); // Let's prevent refresh
    if (image !== null) {
      setBtn(false)
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              // post image
              db.collection("products").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                name,
                stock: amount,
                photo: url,
                price,
              });

              setName("");
              setPrice("");
              setAmount("");
              setImage(null);
              setBtn(true)
              console.log("done");
            })
            .catch((err) => console.log(err));
        }
      );
    }else{
      console.log("No data")
    }
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Product Name</Form.Text>
            <Form.Control
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Product Price</Form.Text>
            <Form.Control
              placeholder="Product Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Text className="text-muted">Amount In Stock</Form.Text>
            <Form.Control
              placeholder="Amount In Stock"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <input
            type="file"
            className="mb-3 btn"
            // value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button disabled={!btn} className="btn btn-success w-100">Submit</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddProduct;
