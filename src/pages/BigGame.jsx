import React from "react";
import "../styles/biggame.css";
import image from "../assests/biggameposter.jpg";

function BigGame() {
  return (
    <div id="biggame" className="biggame">
      <div className="row biggame-concept">
        <div className="col-md-12 text-center marb-35">
          <h1 className="title">Big Game 2019 - 𝗙𝗜𝗡𝗗 𝗧𝗛𝗘 𝗕𝗘𝗥𝗬𝗟</h1>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-10 row biggame-content">
          <div className="col-md-6 col-sm-6">
            <img src={image} alt="" className="ttv-ava" />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <p
                className="mb-1"
                style={{ textAlign: "left", display: "block" }}
              >
                ♦️ BIG GAME 2019 của CLB S4C đã chính thức quay trở lại với
                phiên bản “Truy tìm hồng ngọc - Finding the Beryl”.
                <br></br>
                <br></br>
                ♦️ Liệu các bạn đã sẵn sàng để chinh phục những thử thách chông
                gai, bí hiểm trước mắt? Hãy cùng S4C dấn thân vào chuyến phiêu
                lưu “Truy tìm hồng ngọc - Finding the Berly” từ ngay hôm nay.
                <br></br>
                <br></br>
                ♦️ Các đoàn thám hiểm sẽ chính thức lên đường khám phá vùng đất
                này vào ⏳<b>07/09/2019</b>⏳<br></br>
                ♦️ Địa điểm khởi hành tại <b>Công viên Thống Nhất</b>
                <br></br>
                ♦️ Đoàn thám hiểm đã chuẩn bị sẵn lương thực cho bạn trong cuộc
                thám hiểm này vì vậy đừng quên mang theo <b>40.000 VNĐ💰</b> là
                tiền đóng góp cho đoàn thám hiểm.
              </p>
              <div className="registerButtonWrapper">
                <a
                  className="registerButton"
                  target="blank"
                  href="http://bit.ly/Big-Game-S4C"
                >
                  Đăng kí ngay tại đây
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  );
}

export default BigGame;
