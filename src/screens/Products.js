import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Product from "../Components/Product";
import "./products.css";
import { useRecoilState } from "recoil";
import { productData } from "../recoil/ProductsState";
import { db } from "../utils/firebase";
import AddProduct from '../Models/AddProduct'

function Products() {
  const [allProducts, setAllProduct] = useRecoilState(productData);
  const [showModel, setModel] = React.useState(false); 

  useEffect(() => {
    if (allProducts.length < 1) {
      db.collection("products").onSnapshot((shot) => {
        setAllProduct(
          shot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  }, []);
  return (
    <div className="container py-2">
      <div className="d-flex align-items-center justify-content-between mb-4 px-2">
        <h5>Products</h5>
        <button className="btn btn-success" onClick={()=> setModel(true)}>Add New Product</button>
      </div>
      {/* Search */}
      <AddProduct show={showModel} onHide={()=> setModel(false)} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Search for a product here
          </Form.Text>
          <Form.Control placeholder="Search..." />
        </Form.Group>
      </Form>
      {/* grid */}
      <div className="product__list">
        {allProducts.map((p) => (
          <Product data={p.data} key={p.id} id={p.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
