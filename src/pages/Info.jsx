import React from "react";
import "../styles/Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="flex justify-evenly  pt-20   ">
        <div class="flip-card-container md:w-80 w-screen h-96">
          <div class="flip-card">
            <div class="flip-card-front">front</div>
            <div class="flip-card-back">
              <p>
                "Two things are infinite: the universe and human stupidity; and
                I'm not sure about the universe."
                <span>- Albert Einstein -</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-8   info">
          <h1 className="text-3xl font-semibold flex md:justify-start sm:justify-center">
            Front-end Web Developer
          </h1>
          <h2 className="mt-5 text-2xl font-semibold">Abolfazl-Mousavi</h2>

          <div className="text-xl">
            <birthday>birthday:2004/12/12</birthday>
            <p>
              email:
              <a href="mailto:a.mousavi.doost.04@gmail.com">
                a.mousavi.doost.04@gmail.com
              </a>
            </p>
            <p>
              phone:<phone>+989106934585</phone>
            </p>

            <address>adress:IRAN,Tehran</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
