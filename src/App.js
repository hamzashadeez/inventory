import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./screens/Products";
import HomePage from "./screens/HomePage";
import Dashboard from "./screens/Dashboard";
import Header from "./Components/Header";
import Backdrop from "./Components/Backdrop";
import SideDrawer from "./Components/SideDrawer";
import Login from "./screens/Login";
import Admin from "./screens/Admin";


function App() {
  const [sideToggle, setSideToggle] = useState(false);
  

  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Header click={() => setSideToggle(true)} />
          <div className='my-4'>Invenr</div>
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin1238" component={Admin} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
