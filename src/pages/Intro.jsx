import React, { Fragment } from "react";
import "../styles/intro.css";
import Countdown from "react-countdown-now";
import { Link } from "react-scroll";
import { Event } from "../components/Tracking/index";

function Intro() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Fragment>
        <div className="counter-render row animate-box">
          <div className="px-md-4 col-3 text-center">
            <span className="number-count-down">{days}</span>

            <span className="counter-tag">Days</span>
          </div>
          <div className="px-md-4 col-3 text-center">
            <span className="number-count-down">{hours}</span>
            <span className="counter-tag">Hours</span>
          </div>
          <div className="clearfix visible-sm-block visible-xs-block"></div>
          <div className="px-md-4 col-3 text-center">
            <span className="number-count-down">{minutes}</span>
            <span className="counter-tag">Minutes</span>
          </div>
          <div className="px-md-4 col-3 text-center">
            <span className="number-count-down">{seconds}</span>
            <span className="counter-tag">Seconds</span>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <div id="intro" className="intro">
      <h1 className="bigTitle">S4C</h1>
      <h1 className="introTitle">CLB TRUYỀN THÔNG & KỸ NĂNG MỀM</h1>
      <h3 className="subTitle">
        CHÚC MỪNG CÁC ỨNG VIÊN <br></br>ĐÃ LỌT VÀO VÒNG PHỎNG VẤN ĐỢT TUYỂN
        THÀNH VIÊN GEN 7 CLB S4C
      </h3>

      {/* <a
        href="http://bit.ly/tuyen-thanh-vien-S4C"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => Event("User", "Sign Up for S4C", "SIGN_UP_S4C")}
      >
        Đăng ký ngay!
      </a> */}
      <Link
        className="register-button"
        to="interview"
        spy={true}
        smooth={true}
        duration={500}
      >
        Thông tin vòng phỏng vấn
      </Link>

      {/* <Countdown date={"Sun, 08 Sep 2019 00:00:00"} renderer={renderer} /> */}
      {/* <h3 className="subTitle" style={{ margin: "0 0 20px" }}>
        tới lúc đóng vòng đơn
      </h3> */}
    </div>
  );
}

export default Intro;
