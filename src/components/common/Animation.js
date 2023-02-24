import Lottie from "react-lottie";
import React from "react";

function Animation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}

export default Animation;
