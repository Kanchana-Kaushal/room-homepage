import { useEffect, useState } from "react";
import slidesData from "../data/slider.js";

function Slider(props) {
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
        className="hidden h-full object-contain md:block"
      />
    </div>
  ));

  function nextSlide() {
    setImageIndex((prev) => (prev + 1 + slidesData.length) % slidesData.length);
    props.slideArticle();
  }

  function prevSlide() {
    setImageIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    props.slideArticle();
  }

  console.log(imageIndex);

  return (
    <>
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div
            className={`flex transition-transform duration-300 ease-in`}
            style={{ transform: `translateX(-${100 * imageIndex}%)` }}
          >
            {slides}
          </div>
        </div>

        <div className="absolute right-0 bottom-0 z-50 flex md:-right-25">
          <div
            className="w-fit cursor-pointer bg-black p-5 transition-opacity ease-in-out hover:opacity-80 md:p-6"
            onClick={prevSlide}
          >
            <img
              src="/public/images/icon-angle-left.svg"
              alt="slide-left"
              className="w-2.5 md:w-3.5"
            />
          </div>

          <div
            className="w-fit cursor-pointer bg-black p-5 transition-opacity ease-in-out hover:opacity-80 md:p-6"
            onClick={nextSlide}
          >
            <img
              src="/public/images/icon-angle-right.svg"
              alt="slide-right"
              className="w-2.5 md:w-3.5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
