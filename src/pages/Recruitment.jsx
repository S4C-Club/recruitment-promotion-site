import React from "react";
import "../styles/recruitment.css";
import Header from "../components/Header";
import img from "../assests/Redline/1.jpg";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

function Recruitment() {
  return (
    <div className="recruitment">
      <div className="row">
        <div className="col-md-12 text-center marb-35">
          <h1 className="title">Tuyển thành viên 2019</h1>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-10 row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="heading">The Red Maker</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                impedit inventore culpa vero accusamus in nostrum dignissimos
                modi, molestiae. Autem iusto esse necessitatibus ex corporis
                earum quaerat voluptates quibusdam dicta!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <img
              src={img}
              alt=""
              className="img-responsive"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>

      <div id="counter" className="counter">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
              <span class="counter-label">Members</span>
              <span> 
                <LazyLoad>
                  <CountUp end={200} duration={5} />
                </LazyLoad>
              </span>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
              <span class="counter-label">Events</span>
                <LazyLoad>
                  <CountUp end={20} duration={5} />
                </LazyLoad>
              </div>
              <div className="clearfix visible-sm-block visible-xs-block"></div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
              <span class="counter-label">Likes</span>
                <LazyLoad>
                  <CountUp end={7000} duration={5} />
                </LazyLoad>
                
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 text-center">
              <span class="counter-label">Activities</span>
                <LazyLoad>
                  <CountUp end={68} duration={5} />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
