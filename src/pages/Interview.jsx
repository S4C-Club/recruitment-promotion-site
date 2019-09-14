import React from "react";
import "../styles/biggame.css";
import image from "../assests/interview.jpg";

function Interview() {
  return (
    <div id="interview" className="interview">
      <div className="row interview-wrapper">
        <div className="col-md-12 text-center marb-35">
          <h1 className="title">Vòng phỏng vấn</h1>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-10 row interview-content">
          <div className="col-md-6 col-sm-6">
            <img src={image} alt="" className="interview-ava" />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <p
                className="mb-1"
                style={{
                  textAlign: "left",
                  display: "block"
                }}
              >
                "Chỉ cần bước thêm một bước nữa thôi, thành công sẽ vẫy tay với
                bạn"
                <br></br>
                <br></br>
                ♦️ Các ứng viên sau khi nhận được thông báo từ S4C hãy nhanh tay
                gửi lại tin nhắn XÁC NHẬN cho vòng phỏng vấn tiếp theo.
                <br></br>
                <br></br>
                ♦️ Thời gian phỏng vấn <b>12/09/2019</b>
                <br></br>
                ♦️ Buổi sáng: 8h30-11h
                <br></br>
                ♦️ Buổi chiều: 13h30 - 17h
                <br></br>
                <br></br>
                ♦️ Địa điểm phỏng vấn{" "}
                <b>Khu nhà B9 (Phía sau canteen - Học viện)</b>
                <br></br>
              </p>
              <div className="registerButtonWrapper">
                <a
                  className="registerButton"
                  target="blank"
                  href="https://www.facebook.com/pg/s4c.tuyenthanhvien/photos/?tab=album&album_id=123186915722429"
                >
                  HÌNH ẢNH CỦA BUỔI PHỎNG VẤN
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

export default Interview;
