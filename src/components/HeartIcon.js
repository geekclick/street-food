"use client";
import React, { useState } from "react";

const HeartIcon = (props) => {
  const [heart, setHeart] = useState({ theme: "far", color: "black" });

  const clickedHeart = () => {
    if (heart.theme === "far") {
      setHeart({
        theme: "fas",
        color: "pink-500",
      });
    } else {
      setHeart({
        theme: "far",
        color: "black",
      });
    }
  };
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={clickedHeart}
      >
        <i
          class={`${heart.theme} fa-heart scale-${props.scale} text-${heart.color}`}
        ></i>
      </div>
    </>
  );
};

export default HeartIcon;
