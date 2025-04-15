import { useEffect, useState } from "react";
import slidesData from "../data/slider.js";

function Slider({ slideArticle }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      prevSlide();
    }, 6000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  function nextSlide() {
    setImageIndex((prev) => (prev + 1) % slidesData.length);
    slideArticle();
  }

  function prevSlide() {
    setImageIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    slideArticle();
  }

  const slides = slidesData.map((slide, index) => (
    <div className="w-full shrink-0 grow-0" key={index}>
      <img
        src={slide.mobile}
        alt={`Slide ${index + 1} - mobile view`}
        className="w-full md:hidden"
      />
      <img
        src={slide.desktop}
        alt={`Slide ${index + 1} - desktop view`}
        className="hidden h-full object-contain md:block"
      />
    </div>
  ));

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in"
          style={{ transform: `translateX(-${100 * imageIndex}%)` }}
        >
          {slides}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-50 flex md:-right-25">
        <div
          className="w-fit cursor-pointer bg-black p-5 transition-opacity ease-in-out hover:opacity-80 md:p-6"
          onClick={prevSlide}
          role="button"
          aria-label="Previous slide"
        >
          <img
            src="/room-homepage/images/icon-angle-left.svg"
            alt="Previous slide icon"
            className="w-2.5 md:w-3.5"
          />
        </div>

        <div
          className="w-fit cursor-pointer bg-black p-5 transition-opacity ease-in-out hover:opacity-80 md:p-6"
          onClick={nextSlide}
          role="button"
          aria-label="Next slide"
        >
          <img
            src="/room-homepage/images/icon-angle-right.svg"
            alt="Next slide icon"
            className="w-2.5 md:w-3.5"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
