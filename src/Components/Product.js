import React from "react";
import "./product.css";
import { useRecoilState } from "recoil";
import { ImagePreview } from "../recoil/Image";
import {Link} from 'react-router-dom'

function Product({ data, id, showIt }) {
  const [image, setImage] = useRecoilState(ImagePreview);
  const link = data?.photo;
  const encoded = link.replace("&", "%26")
  const encoded2 = encoded.replace("images/", "%26")
  return (
    <div
      className="-pb-1 shadow-sm bg-white product_item"
    >
      <img alt="" src={data?.photo} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
      <div className="mt-3 px-3">
        <h6 className="mb-0">{data?.name}</h6>
        <div className="mb-0 d-flex mt-2 justify-content-between">
          <h5 className="mb-0 text-success">NGN{" "}{data?.price}</h5>
        </div>
      </div>
      <div className='d-flex mb-2 px-2 mt-1'>
        <button className='btn btn-light border-1 w-100  text-muted' onClick={()=>{
          setImage(data?.photo);
          showIt()}}>View
          </button>
          <a href={"https://wa.me/2348032542898?text=Hi Idris,%20I%20need%20this:%20"+window.encodeURIComponent(data?.photo)}
           target="_blank" className='btn btn-success px-4 w-100 ml-4'>
             <i className='fa fa-whatsapp'></i>
            </a>
      </div>

    </div>
  );
}

export default Product;
