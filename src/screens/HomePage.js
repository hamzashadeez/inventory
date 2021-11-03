import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import "./products.css";
import { useRecoilState } from "recoil";
import { productData } from "../recoil/ProductsState";
import { db } from "../utils/firebase";
import logo from "../assets/logo.jpeg";
import Preview from "../Models/Preview";

function HomePage() {
  const [allProducts, setAllProduct] = useRecoilState(productData);
  const [showModel, setModel] = React.useState(false);
  const [search, setSearch] = useState("")
  const [list, setList] = useState(allProducts)


  const showIt = () => {
    setModel(true);
  };

  const makeSearch = (e) => {
    setSearch(e.target.value);
    setList(
      allProducts.filter((p) => {
        return p.data.name.indexOf(search) !== -1;
      })
    );
  };

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
    <div id="header" className="container py-2">
      <div className="mb-2 mt-2 px-2">
        <h5>Products</h5>
        <div className="search__container">
          <input
            value={search}
            onChange={(e)=> makeSearch(e)}
            placeholder="search product"
            className="form-control search_input mb-2"
          />
        </div>
      </div>

      {/* Modal */}
      <Preview show={showModel} onHide={() => setModel(false)} />
      {/* grid */}
      <div className="product__list">
        {list.map((p) => (
          <Product showIt={() => showIt()} data={p.data} key={p.id} id={p.id} />
        ))}
      </div>
      <div id="about" class="headline container my-4">
        <h3 class="text-center text-muted">About us</h3>
        <div class="bg-white p-4 shadow-sm text-center mb-3 about align-items-center">
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
