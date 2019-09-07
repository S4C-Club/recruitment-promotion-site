import React, { Fragment } from "react";
import "../styles/intro.css";
import Header from "../components/Header";
import Countdown from "react-countdown-now";

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
        Đợt tuyển thành viên duy nhất trong năm 2019 đã chính thức bắt đầu
      </h3>
      <Countdown date={"Sun, 08 Sep 2019 00:00:00"} renderer={renderer} />
      <h3 className="subTitle" style={{ margin: "0 0 20px" }}>
        tới lúc đóng vòng đơn
      </h3>
      <a
        href="http://bit.ly/tuyen-thanh-vien-S4C"
        className="register-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Đăng ký ngay!
      </a>
    </div>
  );
}

export default Intro;
