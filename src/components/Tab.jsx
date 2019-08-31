import React, { Component } from 'react';
import "../styles/tab.css";
import image from "../assests/biggameposter.jpg";
export default class Tab extends Component {
    render() {
        return (
            <div className="container">
                <h2>Tuyển thành viên</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="vertical-tab" role="tabpanel">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" ><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">CONCEPT</a></li>
                            <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">QUYỀN LỢI</a></li>
                            <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">NHIỆM VỤ MỖI BAN</a></li>
                            <li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">YÊU CẦU</a></li>
                            <li role="presentation"><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">CÁCH THỨC ĐĂNG KÝ</a></li>
                            <li role="presentation"><a href="#Section6" aria-controls="messages" role="tab" data-toggle="tab">Big Game</a></li>

                        </ul>
                        <div className="tab-content tabs">
                            <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                                <h3>Red Maker</h3>
                                <p>♦️ Ai đó đã từng nói “Cuộc sống không phải là hành trình bạn kiếm tìm bản thân mình mà nó chỉ bắt đầu khi bạn tự tạo ra thế giới của riêng mình”. Cuộc sống là một cuộc phiêu lưu đầy bất ngờ và kỳ thú để kiến tạo nên bản sắc của cá nhân nhưng không phải ai cũng có đủ dũng khí để dấn thân vào chuyến du hành đầy thách thức đó. Hãy nhớ bạn là ai không quan trọng, quan trọng là bạn dám viết nên câu chuyện của chính mình! 
<br></br>
♦️ Đó cũng là tôn chỉ của các Red Makers - những nghệ sĩ luôn khát khao, nung nấu trong mình Red Dream - ước mơ viết nên bản nhạc của riêng mình. Bản nhạc Red Song chỉ được cất lên khi người nghệ sĩ dưới sân khấu viết ra những Red Notes và sắp xếp chúng một cách điêu luyện vào các khuông nhạc trống, để rồi đến cuối con đường cùng thưởng thức bản hòa ca đậm sắc “đỏ” của riêng mình.</p>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section2">
                            <h3>Khi gia nhập đại gia đình thành viên S4C bạn sẽ nhận được:</h3>
                                <p>
-Có môi trường sáng tạo, năng động để học hỏi và phát triển bản thân. 
</p>
                                <p>-Được training những kỹ năng về truyền thông và tổ chức sự kiện từ những người anh người chị dày dặn kinh nghiệm. 
                                </p>
                                <p>-Mở rộng mối quan hệ, kết bạn với những người có cùng chung sở thích và chí hướng ở trường đại học 
                                </p>
                                <p>-Vượt qua những giới hạn, thử thách và trải nghiệm những cảm giác chưa từng được thử khi còn học cấp 3: Lần đầu tự tạo ra một sự kiện của riêng mình chẳng hạn. 
                                </p>
                                <p>-Trải nghiệm những buổi gỡ rối thắc mắc tuổi hồng từ những người anh, chị đi trước. Lắng nghe những chia sẻ về đời sống đại học cũng như những lời khuyên nhớ đời từ họ. 
                                </p>
                                <p>-Có một gia đình mới để yêu thương và lưu giữ những khoảnh khắc đáng nhớ thời đại học. 
                                </p>
                                <p>-Có một gia đình mới để yêu thương và lưu giữ những khoảnh khắc đáng nhớ thời đại học. 
                                </p>

                                <p>-Có một gia đình mới để yêu thương và lưu giữ những khoảnh khắc đáng nhớ thời đại học. 
                                </p>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section3">
                                <h3>Ban truyền thông: </h3>
                                <p>
-Quảng bá hình ảnh của CLB đến với đại chúng. <br></br>
-Quản lý các kênh truyền thông của CLB: Fanpage facebook. instagram. <br></br>
-Sáng tạo những nội dung phong phú, đa dạng phục vụ mục đích truyền thông. <br></br>
-Lập kế hoạch truyền thông chi tiết cho các sự kiện, hoạt động của CLB tổ chức. <br></br>
-Phối hợp với ban thiết kế tạo ra những ấn phẩm sáng tạo, thu hút. <br></br>

</p>
<h3>Ban sự kiện: 
</h3>
<p>-Lên hồ sơ sự kiện, kế hoạch chi tiết trước mỗi sự kiện, hoạt động của CLB tổ chức. <br></br>
-Khảo sát và tìm địa điểm phù hợp để tổ chức chương trình.<br></br>
-Dự trù kinh phí cho mỗi mùa sự kiện diễn ra. <br></br>
-Liên hệ với những đơn vị, đối tác khác để kết hợp làm việc. </p>
<h3>Ban thiết kế: 
</h3>
<p>Tiểu ban thiết kế<br></br>
-Đội ngũ chính tạo ra những ấn phẩm về mặt visual của CLB. <br></br>
-Tự mình sáng tác nên những kiệt tác đồ họa.<br></br>
-Thiết kế các ấn phẩm truyền thông cho các bài đăng trên fanpage.<br></br>
-Thiết kế các ấn phẩm truyền thông cho các hoạt động, sự kiện của CLB.<br></br>
-Tiểu ban quay chụp: <br></br>
-Ghi lại những khoảnh khắc đáng nhớ của CLB qua những thước phim đẹp nhất.<br></br>
-Thực hiện quay phim, chụp ảnh và hậu kỳ cho các dự án, hoạt động, sự kiện</p>                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section4">
                                <h3>Ban truyền thông: </h3>
                                <p>-Có khả năng tổng hợp các thông tin.<br></br>
-Sử dụng biết quản lý các kênh truyền thông mạng.<br></br>
-Có kinh nghiệm và thích viết lách là một lợi thế.<br></br>
-Khả năng ngôn ngữ và sử dụng ngôn từ một cách linh hoạt.
</p>
<h3>Ban sự kiện: 
</h3>
<p>-Có kinh nghiệm trong việc tổ chức sự kiện là một lợi thế.<br></br>
-Tư duy rõ ràng, phản xạ nhanh, linh hoạt trong mọi trường hợp.<br></br>
--Cẩn thận, tỉ mỉ.<br></br>
Biết quản lý bản thân và phân chia thời gian hợp lý.
</p>
<h3>Ban thiết kế: </h3>
<p>Tiểu ban thiết kế:<br></br>
-Biết và sử dụng thành thạo các phần mềm thiết kế và chỉnh sửa ảnh. Tư duy sáng tạo, đột phá trong công việc.<br></br>
-Có kinh nghiệm trong thiết kế và chỉnh sửa là một lợi thế. <br></br>
Tiểu ban quay chụp:<br></br>
-Biết và hiểu các kỹ năng quay phim, chụp ảnh cơ bản.<br></br>
 -Sử dụng máy ảnh và các thiết bị quay phim, chụp hình thành thạo. <br></br>
 -Biết sử dụng nhiều phần mềm, ứng dụng chỉnh ảnh là một lợi thế.<br></br>
 -Có phong cách chụp ảnh riêng biệt và độc đáo.
</p>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="Section5">
                                <h3>Đăng ký offline <br></br></h3> 
                                <p>Đến với bàn truyền thông của CLB S4C tại Học viện công nghệ Bưu chính Viễn thông <br></br> <br></br> <br></br> 
</p>
<h3>Đăng ký online <br></br></h3>
<a href ="https://docs.google.com/forms/d/1e6fwHhgqc7w-yTPbC-rNSRlfabZ6V6LFyBpGhXgSVlA/viewform?fbclid=IwAR0TpHMIYhbZDBM6WwvA7PFFPtRuYuzB0zheYmts8ncxAFKMz6CsEbyBojs&edit_requested=true">Đăng ký ngay tại đây
</a>
                            </div>
                            <div role="tabpanel" className="tab-pane fade " id="Section6">
                                <div className="media">
                                <img className="align-self-center mr-3" src={image} alt="Generic placeholder image"/>

                                    <div className="media-body">
                                    <h5 className="mt-0">Big Game</h5>
                                    <p className="mb-1"> <br></br> <br></br> <br></br>
                                    ♦️BIG GAME 2019 của CLB S4C đã chính thức quay trở lại với phiên bản “Truy tìm hồng ngọc - Finding the Beryl”. <br></br>
                                    <br></br>
                                    <br></br>
                                    ♦️Liệu các bạn đã sẵn sàng để chinh phục những thử thách chông gai, bí hiểm trước mắt? Hãy cùng S4C dấn thân vào chuyến phiêu lưu “Truy tìm hồng ngọc - Finding the Berly” ngay hôm nay.<br></br>  <br></br> <br></br> 
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWUP6t3thiJMLk20WvMkAl2N5n8RUcurcdOZ1OlDn4Y6Kgsg/viewform?fbclid=IwAR1IUv0T-qF4-zI2wxuQtfID4Yi3JbG6G5cWnVrZwa-fNqZtC_ktmT__PSE">Đăng ký ngay tại đây</a>                             
                                </p>
                                </div>
                                </div>
                            
  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
