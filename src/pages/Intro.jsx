import React from "react";
import "../styles/intro.css";

function Intro() {
  return (
    <div className="intro">
      <h1 className="bigTitle">S4C</h1>
      <h1 className="introTitle">CLB TRUYỀN THÔNG & KĨ NĂNG MỀM</h1>
      <h3 className="subTitle">
        Đợt tuyển thành viên duy nhất trong năm 2019 đã chính thức bắt đầu
      </h3>
      <a
        href="http://bit.ly/tuyen-thanh-vien-S4C"
        className="register-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Đăng ký ngay
      </a>
    </div>
  );
}

export default Intro;
