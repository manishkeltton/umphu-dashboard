import React from "react";

import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const slides = [
    { id: 1, title: "Introduce img", img: "/introduce_page.jpg" },
    { id: 2, title: "Select game img", img: "/select_game.jpg" },
    { id: 3, title: "Board img", img: "/board.jpg" },
  ];

  return (
    <div className="lg:w-[50%] md:w-[60%] max-sm:w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="lg:pl-4">
            <img
              src={slide.img}
              alt={slide.title}
              className="rounded-md text-center block w-[100%] h-[400px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
