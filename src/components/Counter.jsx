import React from "react";
import "../styles/recruitment.css";
import Header from "../components/Header";
import img from "../assests/ttv-cover.jpg";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

function Counter() {
  return (
    <div className="counter">
      <div id="fh5co-counter" className="fh5co-counters">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center animate-box">
            <p>
              We have a fun facts far far away, behind the word mountains, far
              from the countries Vokalia and Consonantia, there live the blind
              texts.
            </p>
          </div>
        </div>
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                <LazyLoad>
                  <CountUp end={68} duration={5} />
                </LazyLoad>

                <span className="">Members</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                <LazyLoad>
                  <CountUp end={68} duration={5} />
                </LazyLoad>
                <span className="">Ministries</span>
              </div>
              <div className="clearfix visible-sm-block visible-xs-block"></div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                <LazyLoad>
                  <CountUp end={68} duration={5} />
                </LazyLoad>
                <span className="">Classes</span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                <LazyLoad>
                  <CountUp end={68} duration={5} />
                </LazyLoad>
                <span className="">Activities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
