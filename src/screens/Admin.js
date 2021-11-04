import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useRecoilState } from "recoil";
import { productData } from "../recoil/ProductsState";
import { db } from "../utils/firebase";
import AdminProduct from "../Components/AdminProduct";
import Preview from "../Models/Preview";
import AddProduct from "../Models/AddProduct";
import EditProduct from "../Models/EditProduct";

function Admin() {
  const [allProducts, setAllProduct] = useRecoilState(productData);
  const [showModel, setModel] = React.useState(false);
  const [showAddProduct, setAddProduct] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])


  const showIt = () => {
    setModel(true);
  };

  const makeSearch = (e) => {
    setSearch(e.target.value);
    if(search === ''){
      setAllProduct(list)
    }else{

      setAllProduct(
        list.filter((p) => {
          // return p.data.name.indexOf(search) !== -1;
         return p.data.name.toLowerCase().startsWith(search.toLowerCase());
        })
      );
    }
  };


  function hideProduct() {
    setAddProduct(false);
  }
  function hideEditProduct() {
    setEditModal(false);
  }
  function showEditProduct() {
    setEditModal(true);
  }

  useEffect(() => {
    db.collection("products")
      .orderBy("timestamp", "desc")
      .onSnapshot((shot) => {
        setAllProduct(
          shot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setList(
          shot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="pt-2 pb-3 container">
      <Preview show={showModel} onHide={() => setModel(false)} />
      <AddProduct
        show={showAddProduct}
        hideProduct={hideProduct}
        onHide={() => setAddProduct(false)}
      />
      <EditProduct
        show={editModal}
        showEditProduct={()=>showEditProduct()}
        hideEditProduct={()=>hideEditProduct()}
        onHide={() => setEditModal(false)}

      />
      <div className="d-flex align-items-center mt-2 justify-content-between">
        <h5>Dashboard</h5>
        <button className="btn btn-success" onClick={() => setAddProduct(true)}>
          Add Product
        </button>
      </div>
      <div className="search__container shadow-sm my-2">
          <i className='fa fa-search'></i>
          <input
            value={search}
            onChange={(e)=> makeSearch(e)}
            placeholder="search product"
            className="search_input border-0 search__input"
          />
          <div onClick={()=>{setAllProduct(list); setSearch('')}} className='btn p-1 px-3 btn-light'>
            <i className='fa fa-close'></i>
          </div>
        </div>
      <div className="product__list">
        {allProducts.map((p) => (
          <AdminProduct
            showIt={() => showIt()}
            hideProduct={()=>hideProduct()}
            hideEditProduct={()=>hideEditProduct()}
            showEditProduct={()=>showEditProduct()}
            data={p.data}
            key={p.id}
            id={p.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
