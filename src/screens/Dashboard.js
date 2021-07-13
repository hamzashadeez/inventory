import React, { useEffect, useState } from "react";
import DashCard from "../Components/DashCard";
import "./dashboard.css";
import { useRecoilState } from "recoil";
import { productData } from "../recoil/ProductsState";
import { db } from "../utils/firebase";

function Dashboard() {
  const [allProducts, setAllProduct] = useRecoilState(productData);

  useEffect(() => {
    db.collection("products").onSnapshot((shot) => {
      setAllProduct(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="py-2 container">
      <h5>Dashboard</h5>
      <div className="dashcontainer">
        <DashCard
          label="Total Products"
          number={allProducts && allProducts.length}
          icon="fa-stethoscope "
        />
        <DashCard label="Orders" number="10" icon="fa-shopping-cart " />
        <DashCard
          label="Out Of Stock"
          number="3"
          icon="fa-exclamation-circle "
        />
      </div>
    </div>
  );
}

export default Dashboard;
