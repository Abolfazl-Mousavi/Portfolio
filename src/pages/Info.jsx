import React from "react";
import "../styles/Info.css";
import { Link } from "react-router-dom";
import { LiquidFooter } from "../components";
import Portrait from "../assets/07f1c5ce-14ec-4e61-b1d3-96a9c1e7843b.jpg";
import Portrait2 from "../assets/1e288e18-63cc-4623-baec-63d9531b229f.jpg";

const Info = () => {
  return (
    <div className="info-container">
      <div className="flex justify-evenly  pt-20   ">
        <div class="flip-card-container md:w-80 w-screen h-96">
          <div class="flip-card">
            <div class="flip-card-front">
              <img
                src={Math.floor(Math.random() * 2) === 1 ? Portrait : Portrait2}
                alt="Aboulfazl-Mousavi"
              />
            </div>
            <div class="flip-card-back flex flex-col">
              <h3 className="text-3xl">About Me</h3>
              <p className="select-none">
                When I was three my dad bought me a computer and I've been
                playing with it for as long as I can remember. Now I learned
                computers language and i can make a lot of new things with it.
                stay in touch with me if you neen any help. by the way check out
                my github in{" "}
                <Link className="italic" to={"/contactme"}>
                  contact me
                </Link>{" "}
                page.
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
      <div id="bubble-wrapper">
        <LiquidFooter />
      </div>
    </div>
  );
};

export default Info;
