import { useEffect, useState } from "react";
import slidesData from "../data/slider.js";

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      prevSlide();
    }, 6000);
  }, []);

  const slides = slidesData.map((slide, index) => (
    <div className="w-full shrink-0 grow-0" key={index}>
      <img
        src={slide.mobile}
        alt={`hero-img-${index}`}
        className="w-full md:hidden"
      />
      <img
        src={slide.desktop}
        alt={`hero-img-${index}`}
        className="hidden md:block"
      />
    </div>
  ));

  function nextSlide() {
    setImageIndex((prev) => (prev + 1 + slidesData.length) % slidesData.length);
  }

  function prevSlide() {
    setImageIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }

  console.log(imageIndex);

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className={`flex -translate-x-[${100 * imageIndex}%] transition-transform duration-300 ease-in`}
        >
          {slides}
        </div>

        <div className="absolute right-0 bottom-0 flex">
          <div className="w-fit bg-black p-5" onClick={prevSlide}>
            <img
              src="/public/images/icon-angle-left.svg"
              alt="slide-left"
              className="w-2.5"
            />
          </div>

          <div className="w-fit bg-black p-5" onClick={nextSlide}>
            <img
              src="/public/images/icon-angle-right.svg"
              alt="slide-right"
              className="w-2.5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
