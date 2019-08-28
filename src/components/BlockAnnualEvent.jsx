import React, { Component } from 'react'
import Modal1 from'./Modal1';
import  '../styles/aboutus.css'
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';

export default class BlockAnnualEvent extends Component {
    render() {
        return (
            <div className="container">
                <div class="box"><Modal1/></div>       
                <div class="box"><Modal2/></div>
                <div class="box"><Modal3/></div>
                <div class="box"><Modal4/></div>
            </div>
            
        )
    }
}
