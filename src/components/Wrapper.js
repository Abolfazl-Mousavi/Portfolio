import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Wrapper.css";

const Wrapper = () => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
  ];

  let prev = 0;

  useEffect(() => {
    const wrapper = document.getElementById("wrapper");
    setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

      wrapper.dataset.configuration = combination.configuration;
      wrapper.dataset.roundness = combination.roundness;

      prev = index;
    }, 4000);
  }, []);

  return (
    <div id="wrapper" data-configuration="1" data-roundness="1">
      <Link to="/info" className="shape" title="INFO">
        INFO
      </Link>
      <Link to="/status" className="shape" title="STATUS">
        STATUS
      </Link>
      <Link to="/skills" className="shape" title="SKILLS">
        SKILLS
      </Link>
      <Link to="/projects" className="shape" title="PROJECTS">
        PROJECTS
      </Link>
      <Link to="/reviews" className="shape" title="REVIEWS">
        REVIEWS
      </Link>
      <Link to="/supportme" className="shape" title="SUPPORT ME">
        SUPPORT ME
      </Link>
      <Link to="/contactme" className="shape" title="CONTACT ME">
        CONTACT ME
      </Link>
    </div>
  );
};

export default Wrapper;
