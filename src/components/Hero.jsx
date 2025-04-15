import { useState } from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";

function Hero() {
  const [switchArticle, setSwitchArticle] = useState(false);

  function slideArticle() {
    setSwitchArticle((prev) => !prev);
  }

  return (
    <header>
      <NavBar />
      <div className="items-center md:flex">
        <Slider slideArticle={slideArticle} />

        <div className="items-center justify-center space-y-4 p-8 md:flex">
          {switchArticle ? (
            <div className="md:max-w-6/10">
              <h1 className="text-custom-very-dark-gray text-4xl font-bold">
                We are available all across the globe
              </h1>

              <p className="text-custom-dark-gray md:mt-4">
                With stores all over the world, it's easy for you to find
                furniture for your home or place of business. Locally, we’re in
                most major cities throughout the country. Find the branch
                nearest you using our store locator. Any questions? Don't
                hesitate to contact us today.
              </p>

              <div className="mt-8 flex cursor-pointer items-center gap-6 hover:opacity-85">
                <p className="text-custom-very-dark-gray tracking-[10px] uppercase">
                  Shop now
                </p>

                <img src="/public/images/icon-arrow.svg" alt="arrow" />
              </div>
            </div>
          ) : (
            <div className="md:max-w-6/10">
              <h1 className="text-custom-very-dark-gray text-4xl font-bold">
                Discover innovative ways to decorate
              </h1>

              <p className="text-custom-dark-gray md:mt-4">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>

              <div className="mt-8 flex cursor-pointer items-center gap-6 hover:opacity-85">
                <p className="text-custom-very-dark-gray tracking-[10px] uppercase">
                  Shop now
                </p>

                <img src="/public/images/icon-arrow.svg" alt="arrow" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Hero;
