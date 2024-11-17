import Image from "next/image";
import React from "react";

import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const slides = [
    { id: 1, title: "App 1", img: "/ic_board.png" },
    { id: 2, title: "App 2", img: "/dice.png" },
    { id: 3, title: "App 3", img: "/ic_board.png" },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-4 flex justify-center items-center">
            <img
              src={slide.img}
              alt={slide.title}
              className="block w-[100%] h-[300px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
