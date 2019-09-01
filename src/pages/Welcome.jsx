import React from "react";
import "../styles/welcome.css";
import Counter from "../components/Counter";

function Welcome() {
  return (
    <div className="welcome">
      <h1 className="title">Chào mừng bạn đến với CLB S4C</h1>
      <iframe
        width="80%"
        height="90%"
        src="https://www.youtube.com/embed/bWb2DJjEhC4"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="welcome-to-s4c"
      ></iframe>
    </div>
  );
}

export default Welcome;
