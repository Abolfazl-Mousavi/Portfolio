import React, { useEffect } from "react";
import "../styles/Skills.css";

const Skills = () => {
  useEffect(() => {
    const images = document.getElementsByClassName("image");

    let globalIndex = 0,
      last = { x: 0, y: 0 };

    const activate = (image, x, y) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = globalIndex;

      image.dataset.status = "active";

      last = { x, y };
    };

    const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
    };

    const handleOnMove = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
        const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

        activate(lead, e.clientX, e.clientY);

        if (tail) tail.dataset.status = "inactive";

        globalIndex++;
      }
    };

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, [window.onmousemove]);

  return (
    <div className="w-screen h-screen  Skills-container relative">
      <div className="blur">
        <img
          draggable={false}
          class="image"
          data-index="0"
          data-status="inactive"
          src="https://ionicframework.com/docs/icons/logo-react-icon.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="1"
          data-status="inactive"
          src="https://www.pngaaa.com/api-download/4112291"
        />
        <img
          draggable={false}
          class="image"
          data-index="2"
          data-status="inactive"
          src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="3"
          data-status="inactive"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="4"
          data-status="inactive"
          src="https://bachasoftware.com/wp-content/uploads/2020/07/icon_2-1.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="5"
          data-status="inactive"
          src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="6"
          data-status="inactive"
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dcecwsyvsgo6e2bk4s9g"
        />
        <img
          draggable={false}
          class="image"
          data-index="7"
          data-status="inactive"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="8"
          data-status="inactive"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        />
        <img
          draggable={false}
          class="image"
          data-index="9"
          data-status="inactive"
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
        />
      </div>
      <div className="absolute content  items-center ">
        <h1 className=" text-4xl font-semibold ">hi there</h1>
      </div>
    </div>
  );
};

export default Skills;
