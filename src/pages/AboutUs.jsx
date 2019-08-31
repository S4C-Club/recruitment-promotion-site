import React, { Component } from "react";
import Header from "../components/Header";
import BlockOtherEvents from "../components/BlockOtherEvents";
import BlockAboutUs from "../components/BlockAboutUs";
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <BlockAboutUs />
        <BlockOtherEvents />
      </div>
    );
  }
}
