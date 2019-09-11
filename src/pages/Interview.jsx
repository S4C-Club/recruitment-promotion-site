import React from "react";
import "../styles/biggame.css";

function Interview() {
  return (
    <div id="interview" className="interview">
      <div className="row biggame-concept">
        <div className="col-md-12 text-center marb-35">
          <h1 className="title">Vòng phỏng vấn</h1>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-10 row biggame-content">
          <div className="col-md-6 col-sm-6">
            <img src={} alt="" className="ttv-ava" />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <p className="mb-1">
                ♦️BIG GAME 2019 của CLB S4C đã chính thức quay trở lại với phiên
                bản “Truy tìm hồng ngọc - Finding the Beryl”. <br></br>
                <br></br>
                <br></br>
                ♦️Liệu các bạn đã sẵn sàng để chinh phục những thử thách chông
                gai, bí hiểm trước mắt? Hãy cùng S4C dấn thân vào chuyến phiêu
                lưu “Truy tìm hồng ngọc - Finding the Berly” ngay hôm nay.
                <br></br> <br></br> <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a
                  className="button"
                  target="blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWUP6t3thiJMLk20WvMkAl2N5n8RUcurcdOZ1OlDn4Y6Kgsg/viewform?fbclid=IwAR1IUv0T-qF4-zI2wxuQtfID4Yi3JbG6G5cWnVrZwa-fNqZtC_ktmT__PSE"
                >
                  Đăng kí ngay tại đây
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  );
}

export default Interview;
