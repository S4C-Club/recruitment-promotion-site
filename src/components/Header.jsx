import React, { Component } from "react";
import "../styles/header.css";
import logo from "../assests/white-logo.png";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

function Header() {
  return (
    <div className="navbar-header">
      <Link
        activeClass="active"
        className="nav-link"
        to="test1"
        spy={true}
        smooth={true}
        duration={500}
      >
        Trang chủ
      </Link>

      <Link
        activeClass="active"
        className="nav-link"
        to="welcome"
        spy={true}
        smooth={true}
        duration={500}
      >
        S4C Club
      </Link>
      <a href="/"><img src={logo} id="logo"></img></a>
      <Link
        activeClass="active"
        className="nav-link"
        to="recruitment"
        spy={true}
        smooth={true}
        duration={500}
      >
        Tuyển Thành Viên
      </Link>

      <Link
        activeClass="active"
        className="nav-link"
        to="footer"
        spy={true}
        smooth={true}
        duration={500}
      >
        Liên Hệ
      </Link>
    </div>
  );
}

export default Header;
