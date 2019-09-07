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
    <nav className="navbar-header navbar fixed-top navbar-expand-md navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-header" id="navbarTogglerDemo02">
        <ul class="navbar-header mr-auto mt-2 mt-lg-0 navbar-header-ul">
          <li class="nav-item ">
            <Link
              activeClass="active"
              className="nav-link navLink"
              to="welcome"
              spy={true}
              smooth={true}
              duration={500}
            >
              S4C Club
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              className="nav-link navLink "
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
            >
              Sự kiện
            </Link>
          </li>

          <li class="nav-item d-none d-md-block">
            <Link
              className="header-logo"
              to="app"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={logo} id="header-logo"></img>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              className="nav-link navLink"
              to="recruitment"
              spy={true}
              smooth={true}
              duration={500}
            >
              Tuyển Thành Viên
            </Link>
          </li>
          <li class="nav-item">
            <Link
              activeClass="active"
              className="nav-link navLink"
              to="footer"
              spy={true}
              smooth={true}
              duration={500}
            >
              Liên Hệ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
