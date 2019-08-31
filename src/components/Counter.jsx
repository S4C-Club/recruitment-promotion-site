import React from "react";
import "../styles/aboutus.css";
import Header from "../components/Header";
import img from "../assests/ttv-cover.jpg";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

function Counter() {
  return (
    <div className="counter">
      <div className="title" style={{ fontSize: 20 }}>
        S4C qua những con số
      </div>

      <div className="row animate-box">
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={200} duration={7} />
          </LazyLoad>

          <span className="counter-tag">Thành viên</span>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={20} duration={7} />
          </LazyLoad>
          <span className="counter-tag">Sự kiện</span>
        </div>
        <div className="clearfix visible-sm-block visible-xs-block"></div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={7516} duration={9} />
          </LazyLoad>
          <span className="counter-tag">Lượt Likes</span>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={68} duration={7} />
          </LazyLoad>
          <span className="counter-tag">Hoạt động</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;
