import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import "./products.css";
import { db } from "../utils/firebase";
import logo from "../assets/logo.jpeg";
import search from "../assets/search.png";
import cancel from "../assets/cancel.png";
import Preview from "../Models/Preview";

function HomePage() {
  const [allProducts, setAllProduct] = useState([]);
  const [showModel, setModel] = React.useState(false);
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

  useEffect(() => {
      db.collection("products").onSnapshot((shot) => {
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
    <div id="header" className="container py-2">
      <div className="mb-2 mt-2 px-2">
        <h5>Products</h5>
        <div className="search__container shadow-sm">
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
      </div>

      {/* Modal */}
      <Preview show={showModel} onHide={() => setModel(false)} />
      {/* grid */}
      <div className="product__list">
        {allProducts.map((p) => (
          <Product showIt={() => showIt()} data={p.data} key={p.id} id={p.id} />
        ))}
      </div>
      <div id="about" className="headline container my-4">
        <h3 className="text-center text-muted">About us</h3>
        <div className="bg-white p-4 shadow-sm text-center mb-3 about align-items-center">
          <img alt="" style={{ width: "150px", height: "150px" }} src={logo} />
          <h4>
            We have quality product with a fixed price, Our store serves
            thousands of customers everyday. Stay with us.
          </h4>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
