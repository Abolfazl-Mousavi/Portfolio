import React, { useEffect } from "react";
import "../styles/SupportMe.css";
const SupportMe = () => {
  useEffect(() => {
    const left = document.getElementById("left-side");

    const handleMove = (e) => {
      left.style.width = `${
        (window.innerWidth / 2 > e.clientX
          ? (e.clientX + 5) / window.innerWidth
          : (e.clientX - 5) / window.innerWidth) * 100
      }%`;
    };

    document.onmousemove = (e) => handleMove(e);

    document.ontouchmove = (e) => handleMove(e.touches[0]);
  });

  return (
    <div className="supportme-container w-screen h-screen">
      <div id="left-side" class="side">
        <h2 class="title">
          {console.log()}
          Do you like my Work?
          <span className="fancy text-3xl float-left">
            <a href="https://freelancer.com" >supportme with: freelancer.com</a>
          </span>
        </h2>
      </div>
      <div id="right-side" class="side">
        <h2 class="title">
          Do you like my Work?
          <span class="fancy text-3xl float-right">
            supportme with: Buymeacoffee.com
          </span>
        </h2>
      </div>
      <div>https://www.buymeacoffee.com/AMousavi</div>
    </div>
  );
};

export default SupportMe;
