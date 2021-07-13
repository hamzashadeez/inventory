import React from "react";
import "./product.css";
import { useHistory, Link } from "react-router-dom";

function Product({ data, id }) {
  const history = useHistory();
  return (
    <div
      className="pb-1 shadow-sm bg-light product_item"
      // onClick={() => history.go(`product/${id}`)}
    >
      <img alt="" src={data?.photo} />
      <div className="mt-3 px-3">
        <h6 className="mb-0">{data?.name}</h6>
        <div className="mb-0 d-flex mt-2 justify-content-between">
          <p className="mb-0">${data?.price}</p>
          <p className="text-success"> {data?.stock} remains</p>
        </div>
      </div>
      <Link className='btn btn-light border-1 w-100 mb-2' to={`product/${id}`}>View</Link>
    </div>
  );
}

export default Product;
