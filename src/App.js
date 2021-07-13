import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./screens/Products";
import Dashboard from "./screens/Dashboard";
import Orders from "./screens/Orders";
import Customers from "./screens/Customers";
import Header from "./Components/Header";
import Backdrop from "./Components/Backdrop";
import SideDrawer from "./Components/SideDrawer";
import ProductScreen from "./screens/ProductScreen";
import NewOrder from "./screens/NewOrder";


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  

  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Header click={() => setSideToggle(true)} />
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/customers" component={Customers} />
            <Route path="/new-order" component={NewOrder} />
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
