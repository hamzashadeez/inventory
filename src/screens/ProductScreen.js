import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { db } from "../utils/firebase";
import "./productScreen.css";

function ProductScreen() {
  const history = useHistory();
  let { id } = useParams();
  const [pData, setPData] = useState({});

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get()
      .then((data) => {
        setPData(data.data());
      });
  }, []);

  const deleteProduct = async () => {
    await db
      .collection("products")
      .doc(id)
      .delete()
      .then(() => {
        alert("Product Deleted");
        history.push('/products')
      });
  };

  return (
    <div className="container py-3 pxxxx">
      <img alt="" className="product__image shadow-sm" src={pData?.photo} />
      <div className="p-3 bg-light m-3 data shadow-sm rounded">
        <h4>{pData?.name}</h4>
        <p>{pData?.price}</p>
        <p>{pData?.stock} Remains</p>
      </div>
      <div className="p-3 bg-light m-3 data shadow-sm rounded align-items-center justify-content-center">
        <h6 className='text-center mb-3'>Danger Zone</h6>
        <button className="btn btn-danger" onClick={() => deleteProduct()}>
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default ProductScreen;
