import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/aboutus.css";

import "react-id-swiper/lib/styles/css/swiper.css";
import Swiper from "react-id-swiper";

import img1 from "../assests/Redline/1.jpg";
import img2 from "../assests/Redline/2.jpg";
import img3 from "../assests/Redline/3.jpg";
import img4 from "../assests/Redline/4.jpg";
export default class Slicker extends Component {
  render() {
    const params = {
      effect: "fade"
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: true
      // }
    };
    return (
      <div className="gallery">
        <div className="row gallery-info">
          <div className="col-6 offset-md-3" id="contentRedLine">
            <div className="shadow">
              <div className="content-wrapper">
                <h2 className="title-redline">Redline Music Party ( Annual Event )</h2>
                <p className="text-justify textRedLine">
                  Redline Music Party: Redline Music Party là sự kiện âm nhạc
                  được tổ chức thường niên bởi CLB S4C, trải qua 4 mùa hoạt động
                  Redline Music Party đã ghi dấu tên tuổi của mình trong lòng
                  nhiều bạn trẻ đam mê underground, rap, indie. Với kỷ lục sold
                  out 200 vé trong vòng 1 phút Redline Music Party càng ngày
                  càng trưởng thành cả về chất lượng và số lượng.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...params}>
          <div>
            <img className="gallery-img" src={img1} alt="img" />
          </div>
          <div>
            <img className="gallery-img" src={img2} alt="img" />
          </div>
          <div>
            <img className="gallery-img" src={img3} alt="img" />
          </div>
          <div>
            <img className="gallery-img" src={img4} alt="img" />
          </div>
        </Swiper>
      </div>
    );
  }
}
