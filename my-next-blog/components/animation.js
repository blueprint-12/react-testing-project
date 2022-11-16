import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../public/main-animation.json";
import lottie404Json from "../public/404-animation.json";

//for 메인페이지
export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}

//for 404페이지
export function NotFoundAnimation() {
  return (
    <Lottie
      loop
      animationData={lottie404Json}
      play
      style={{ width: 300, height: 300 }}
    />
  );
}
