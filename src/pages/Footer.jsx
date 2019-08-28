import React from "react";
import "../styles/footer.css";
import logo from "../assests/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="about-s4c">
            <img src={logo} alt="logo" className="logo" />
            <p>
              CLB S4C được thành lập với mục tiêu tạo một môi trường năng động
              cho sinh viên HV Công Nghệ Bưu Chính Viễn Thông, giúp sinh viên
              rèn luyện , trau dồi kỹ năng mềm thông qua công việc tổ chức sự
              kiện và truyền thông.
            </p>
          </div>
          <div className="contact">
            <h3 className="footer-title">Liên hệ</h3>
            <ul className="contact-list list">
              <li className="contact-item">
                <i className="fas fa-envelope"></i>{" "}
                <p className="contact-text">s4c.ptit@gmail.com</p>
              </li>
              <li className="contact-item">
                <i className="fas fa-phone"></i>{" "}
                <p className="contact-text">096 939 56 17</p>
              </li>
              <li className="contact-item">
                <i className="fas fa-map-marked"></i>{" "}
                <p className="contact-text">
                  Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội
                </p>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="list social-media-list">
              <li className="social-media-item">
                <a
                  href="https://www.facebook.com/S4C.club/"
                  className="social-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a
                  href="https://www.instagram.com/s4c.ptit/"
                  className="social-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a
                  href="https://www.youtube.com/channel/UCknqGRq0aw7X9J50JT5R-4w/"
                  className="social-media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="containter">© 2019 S4C Club. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
