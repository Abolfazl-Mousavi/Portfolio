import React, { useEffect } from "react";
import "../styles/Project.css";

const Projects = () => {
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    window.onmousemove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth,
        maxY = gallery.offsetHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 5500,
          fill: "forwards",
          easing: "ease",
        }
      );
    };
  });

  return (
    <div id="gallery" className="flex justify-center align-middle">
      <h1 className="text-3xl">PROJECTS THAT I WORKED ON</h1>
      <div class="tile">
        <img
          src="https://github.com/Abolfazl-Mousavi/SolarSystem-three.js/raw/main/picture.png"
          alt="SolarSystem"
        />
        <div>
          <h3 className="text-lg font-semibold">SolarSystem with three.js</h3>
          <p>a 3D page with informations about SolarSystem</p>
        </div>
      </div>
      <div class="tile">
        <img
          src="https://github.com/Abolfazl-Mousavi/SaySwapy-UniswapClone-/raw/main/Screenshot%202022-10-21%20042443.png"
          alt="SaySwapy"
        />
        <div>
          <h3 className="text-lg font-semibold">SaySwapy-UniSwapClone</h3>
          <p>Swap tokens and ETHEREUM with two clicks</p>
        </div>
      </div>
      <div class="tile">
        <img
          src="https://github.com/Abolfazl-Mousavi/pwa-hangman/raw/main/Screenshot%202022-10-20%20220149.png"
          alt="PWA Hangman Game"
        />
        <div>
          <h3 className="text-lg font-semibold">PWA Hangman Game</h3>
          <p>a Hangman game you can install it and run offline</p>
        </div>
      </div>
      <div class="tile">
        <img
          src="https://github.com/Abolfazl-Mousavi/qu8iz-game/raw/main/Screenshot%202022-10-21%20044716.png"
          alt="Qu8iz game"
        />
        <div>
          <h3 className="text-lg font-semibold">Qu8iz game</h3>
          <p>
            test your general information and try to get the highets score that
            you can.
          </p>
        </div>
      </div>
      <div class="tile">
        <img
          src="https://github.com/Abolfazl-Mousavi/web3-ETH-transaction/raw/master/Screenshot%202022-10-21%20045337.png"
          alt="ETransactions"
        />
        <div>
          <h3 className="text-lg font-semibold">ETransactions</h3>
          <p>
            you can send a transaction in blockchain and transfer a desired
            amount of eth in goreli testnet to other accounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
