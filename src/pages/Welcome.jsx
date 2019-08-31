import React from "react";
import "../styles/welcome.css";
import Counter from "../components/Counter";

function Welcome() {
  return (
    <div className="welcome">
      <h1 className="title">Welcome To S4C Club</h1>
      <iframe
        width="80%"
        height="80%"
        src="https://www.youtube.com/embed/bWb2DJjEhC4"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="welcome-to-s4c"
      ></iframe>
      <Counter />
    </div>
  );
}

export default Welcome;
