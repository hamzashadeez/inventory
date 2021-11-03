import React from "react";
import "./product.css";
import { useRecoilState } from "recoil";
import { ImagePreview } from "../recoil/Image";

function Product({ data, id, showIt }) {
  const [image, setImage] = useRecoilState(ImagePreview);
  return (
    <div
      className="-pb-1 shadow-sm bg-white product_item"
    >
      <img alt="" src={data?.photo} />
      <div className="mt-3 px-3">
        <h6 className="mb-0">{data?.name}</h6>
        <div className="mb-0 d-flex mt-2 justify-content-between">
          <h5 className="mb-0 text-success">NGN{data?.price}</h5>
        </div>
      </div>
      <button className='btn btn-light border-1 w-100 mb-2 text-muted' onClick={()=>{
        setImage(data?.photo);
        showIt()}}>View</button>
    </div>
  );
}

export default Product;
