import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState("");
  let history  = useHistory();
  function submitPassword(e){
      e.preventDefault();
      if(password === '6897'){
        //   go to admin panel
        history.push('/admin1238')
      }else{
          alert("Incorrect Password")
      }
  }
  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div style={{ width: "350px" }} className="p-3 shadow-sm bg-white">
        <h4 className="text-center text-muted mb-3">Admin Account</h4>
        <select className="form-control">
          <option>Admin</option>
        </select>
        <form onSubmit={(e)=>submitPassword(e)}>
          <input
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="form-control mb-3 mt-3"
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
