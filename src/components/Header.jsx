<<<<<<< HEAD
import React, { Component } from "react";
import "../styles/header.css";
import logo from "../assests/white-logo.png";
function Header() {
  return (
    <nav>
      <a href="/" className="nav-link">
        TRANG CHỦ
      </a>
      <a href="/" className="nav-link">
        {" "}
        S4C CLUB
      </a>
      <img src={logo} id="logo"></img>
      <a href="/" className="nav-link">
        TUYỂN THÀNH VIÊN
      </a>
      <a href="/" className="nav-link">
        LIÊN HỆ
      </a>
    </nav>
  );
}

export default Header;
=======
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className = "container">
                <h3>About us</h3>
                <h2>S4C Club</h2>
                <hr></hr>
            </div>
        )
    }
}
>>>>>>> origin/feature-aboutus
