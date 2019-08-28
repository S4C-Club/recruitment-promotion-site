import React, { Component } from 'react'
import Header from '../components/Header';
import BlockAnnualEvent from '../components/BlockAnnualEvent';
import BlockAboutUs from '../components/BlockAboutUs';
export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <BlockAboutUs/>
                <BlockAnnualEvent/>                
            </div>
        )
    }
}
