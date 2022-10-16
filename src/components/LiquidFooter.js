import "./LiquidFooter.css";

//this component have to have a div parent with id of bubble-wrapper
//and you have to give tha parentId as a porp

const LiquidFooter = ({ parentId }) => {
  console.log(parentId);
  const animatebubbles = (x) => {
    const parent = document.getElementById("bubble-wrapper");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    parent.appendChild(bubble);

    setTimeout(() => {
      parent.removeChild(bubble);
    }, 2000);
  };

  window.onmousemove = (e) => animatebubbles(e.clientX);

  return;
};

export default LiquidFooter;
