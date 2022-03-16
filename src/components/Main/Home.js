import Home from "./Home";
import { Link, Navigate } from "react-router-dom";
import "../Main/App.css";
import { useState } from "react";
import { useEffect } from "react";

const a = {
  width: "18rem",
};

const container = {
  display: "grid",
  gridTemplateColumns: " auto auto",
  backgroundColor: "#2196f3",
  padding: "10px",
};

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.replace("/login");
};

const Main = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://ag-giri.herokuapp.com/movies")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setdata(data));
  }, []);

  return (
    // <div>
    // 	<Home></Home>
    // </div>
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h3>Welcome Bookkeeping</h3>
            <a onClick={handleLogout}>
              <h6>logout</h6>
            </a>
          </div>
        </nav>
      </div>
      {data.map((value, index) => (
        <div key={index} className="grid-container">
          <div class="card" style={a}>
            <img class="card-img-top" src={value.img} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{value.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted"> -by {value.author}</h6>
              <p class="card-text">{value.description}</p>
              <span class="mb-2">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
              <h6 class="card-subtitle mb-2 text-muted">
                {value.view} viewers
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
