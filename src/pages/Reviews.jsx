import React, { useState, useEffect, useRef } from "react";
import "../styles/Reviews.css";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [myReviews, setMyReviews] = useState(0);

  useEffect(() => {
    setMyReviews(document.querySelectorAll(".review").length);
  }, [index]);

  return (
    <div
      onClick={() =>
        setIndex((prevIndex) =>
          prevIndex === myReviews - 1 ? 0 : prevIndex + 1
        )
      }
      className="slider-container"
    >
      <div className="left-slide">
        <div>
          <h1 className="text-3xl">WHAT YOU GUYS THINK ABOUT ME</h1>
          <h2>click anywhere</h2>
        </div>
      </div>
      <div
        style={{ transform: `translate3d(0, ${-index * 128}vh, 0)` }}
        className="right-slide"
      >
        <div className="review">
          <img src="https://www.1999.co.jp/itbig78/10784503.jpg" alt="" />
          <div>
            <h1 className="text-xl mt-1 pl-4">Skadi The Curropting Heart</h1>
            <p>
              When you've made the long journey through the dark up to the
              water's surface, opened your eyes and had them filled with the
              glimmering light of a billion stars as the eternal undulation of
              the ocean waves caress your cheek, lapped the salty taste of your
              tears that remind you of your salty home,
            </p>
          </div>
        </div>
        <div className="review">
          <img src="https://www.1999.co.jp/itbig78/10784503.jpg" alt="" />
          <div>
            <h1 className="text-xl mt-1 pl-4">Skadi The Curropting Heart</h1>
            <p>
              When you've made the long journey through the dark up to the
              water's surface, opened your eyes and had them filled with the
              glimmering light of a billion stars as the eternal undulation of
              the ocean waves caress your cheek, lapped the salty taste of your
              tears that remind you of your salty home,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
