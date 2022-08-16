import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          {" "}
          <h1> MANAN </h1>
        </div>
        <div className="center">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <select name="" id="">
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
            <option value="">Item 4</option>
          </select>

          <div className="search">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
