import React from "react";
import "./product.css";
import { useRecoilState } from "recoil";
import { ImagePreview } from "../recoil/Image";
import EditIcon from "../assets/edit.png";
import View from "../assets/view.png";
import Delete from "../assets/delete.png";

function AdminProduct({
  data,
  id,
  showIt,
  showEditProduct,
  hideEditProduct,
  hideProduct,
}) {
  const [image, setImage] = useRecoilState(ImagePreview);

  const deleteProduct = async () => {
    //   const del = confirm("Are you sure you want to delete this product ?")
    //   if(del){
    console.log("deleted");
    //   }
  };
  return (
    <div className="-pb-1 mb-2 shadow-sm bg-white product_item">
      <img
        alt=""
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
        src={data?.photo}
      />
      <div className="mt-3 px-3">
        <h6 className="mb-0">{data?.name}</h6>
        <div className="mb-0 d-flex mt-2 justify-content-between">
          <h5 className="mb-0 text-success">NGN {data?.price}</h5>
        </div>
      </div>
      <div className=" mb-2 d-flex align-items-center justify-content-around">
        <img
          alt=""
          src={View}
          onClick={() => {
            setImage(data?.photo);
            showIt();
          }}
          className="p-2 actionBtn btn-light flex-1 btn"
        />
        <img
          alt=""
          src={EditIcon}
          className="p-2 actionBtn btn-light flex-1 btn"
          onClick={() => {
            setImage(id);
            setImage(id);
            setImage(id);
            console.log(image);
            showEditProduct();
          }}
        />
        <img
          alt=""
          src={Delete}
          onClick={() => deleteProduct()}
          className="p-2 actionBtn btn-light flex-1 btn"
        />
      </div>
    </div>
  );
}

export default AdminProduct;
