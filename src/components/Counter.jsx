import React from "react";
import "../styles/recruitment.css";
import Header from "../components/Header";
import img from "../assests/ttv-cover.jpg";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

function Counter() {
  return (
    <div className="counter">
      <div className="description">Số liệu về S4C</div>

      <div className="row animate-box">
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={200} duration={7} />
          </LazyLoad>

          <span className="counter-tag">Members</span>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={20} duration={7} />
          </LazyLoad>
          <span className="counter-tag">Events</span>
        </div>
        <div className="clearfix visible-sm-block visible-xs-block"></div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={7516} duration={9} />
          </LazyLoad>
          <span className="counter-tag">Likes</span>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-6 text-center">
          <LazyLoad>
            <CountUp className="number-count-up" end={68} duration={7} />
          </LazyLoad>
          <span className="counter-tag">Activities</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;
