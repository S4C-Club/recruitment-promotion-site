import React, {Component} from 'react';
import '../styles/header.css';
import logo from "../assests/white-logo.png"
function Header() {
    return(
        <nav>
            <a href="/">TRANG CHỦ</a>
            <a href="/">S4C CLUB</a>
            <img src={logo} id="logo"></img>
            <a href="/">TUYỂN THÀNH VIÊN</a>
            <a href="/">LIÊN HỆ</a>
      </nav>
    );
}

export default Header;