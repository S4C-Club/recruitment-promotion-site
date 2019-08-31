import React from "react";
import "../styles/recruitment.css";
import Header from "../components/Header";
import img from "../assests/ttv-ava.jpg";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

function Recruitment() {
  return (
    <div id="recruiment" className="recruitment">
      <div className="row recruitment-concept">
        <div className="col-md-12 text-center marb-35">
          <h1 className="title">Tuyển thành viên 2019</h1>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-10 row">
          <div className="col-md-6 col-sm-6">
            <div className="about-info">
              <h2 className="heading">The Red Maker</h2>
              <p>
                ♦️ Ai đó đã từng nói “Cuộc sống không phải là hành trình bạn
                kiếm tìm bản thân mình mà nó chỉ bắt đầu khi bạn tự tạo ra thế
                giới của riêng mình”. Cuộc sống là một cuộc phiêu lưu đầy bất
                ngờ và kỳ thú để kiến tạo nên bản sắc của cá nhân nhưng không
                phải ai cũng có đủ dũng khí để dấn thân vào chuyến du hành đầy
                thách thức đó. Hãy nhớ bạn là ai không quan trọng, quan trọng là
                bạn dám viết nên câu chuyện của chính mình!
                <br></br>
                ♦️ Đó cũng là tôn chỉ của các Red Makers - những nghệ sĩ luôn
                khát khao, nung nấu trong mình Red Dream - ước mơ viết nên bản
                nhạc của riêng mình. Bản nhạc Red Song chỉ được cất lên khi
                người nghệ sĩ dưới sân khấu viết ra những Red Notes và sắp xếp
                chúng một cách điêu luyện vào các khuông nhạc trống, để rồi đến
                cuối con đường cùng thưởng thức bản hòa ca đậm sắc “đỏ” của
                riêng mình.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <img src={img} alt="" className="ttv-ava" />
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  );
}

export default Recruitment;
