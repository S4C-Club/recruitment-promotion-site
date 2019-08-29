import React, { Component } from 'react';
import Slider from "react-slick";
import  '../styles/aboutus.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assests/Redline/1.jpg";
import img2 from "../assests/Redline/2.jpg";
import img3 from "../assests/Redline/3.jpg";
import img4 from "../assests/Redline/4.jpg";
export default class Slicker extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className = " slicker" >
                <hr></hr>
        <Slider {...settings}>
          <div className="slickerImage">
            <img className="img-fluid" src = {img1}/>
          </div>
          <div className="slickerImage">
          <img className="img-fluid" src = {img2}/>
          </div>
          <div  className="slickerImage">
          <img className="img-fluid" src = {img3}/>
          </div>
          <div  className="slickerImage">
          <img className="img-fluid" src = {img4}/>
          </div>

        </Slider>
            </div>
        )
    }
}
