import React, { Component } from 'react'
import Header from './Header';
import SSlider from './Slider';

export default class BlockAboutUs extends Component {
    render() {
        return (
            
            <div className = "container">
                <Header/>
                <div className="row">
                    <div className="col-6 offset-md-3" id = "contentRedLine" >
                        <h2 className = "description">Redline Music Party ( Annual Event)</h2>
                        <p className="text-justify" id = "textRedLine">Redline Music Party: Redline Music Party là sự kiện âm nhạc được tổ chức thường niên bởi CLB S4C, trải qua 4 mùa hoạt động Redline Music Party đã ghi dấu tên tuổi của mình trong lòng nhiều bạn trẻ đam mê underground, rap, indie. Với kỷ lục sold out 200 vé trong vòng 1 phút Redline Music Party càng ngày càng trưởng thành cả về chất lượng và số lượng. Hãy cùng nhìn lại những khoảnh khắc đáng nhớ qua mỗi mùa Redline để hiểu thêm về chúng mình nhé!</p>
                    </div>
                </div>
                <SSlider/>
            </div>
        )
    }
}
