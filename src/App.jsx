import { useState } from "react";

function App() {
  const [isMenuShwon, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown((prev) => !prev);
  }

  return (
    <>
      <header>
        <nav className="absolute z-50 flex w-full items-center justify-center p-8">
          <img
            src={
              isMenuShwon
                ? "/public/images/icon-close.svg"
                : "/public/images/icon-hamburger.svg"
            }
            alt="menu"
            className="absolute left-6 z-50"
            onClick={toggleMenu}
          />

          <div>
            <img src="/public/images/logo.svg" alt="room logo" />
          </div>

          {isMenuShwon && (
            <ul className="absolute flex h-full w-full items-center justify-end gap-4 bg-white p-6 font-bold drop-shadow-2xl">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          )}
        </nav>

        <div>
          <div className="relative">
            <img
              src="/public/images/mobile-image-hero-1.jpg"
              alt="hero-img-1"
              className="w-full"
            />
            <div className="absolute right-0 bottom-0 flex">
              <div className="w-fit bg-black p-5">
                <img
                  src="/public/images/icon-angle-left.svg"
                  alt="slide-left"
                  className="w-2.5"
                />
              </div>

              <div className="w-fit bg-black p-5">
                <img
                  src="/public/images/icon-angle-right.svg"
                  alt="slide-right"
                  className="w-2.5"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 p-8">
            <h1 className="text-custom-very-dark-gray text-4xl font-bold">
              Discover innovative ways to decorate
            </h1>

            <p className="text-custom-dark-gray">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>

            <div className="mt-8 flex items-center gap-8">
              <p className="text-custom-very-dark-gray text-lg tracking-[10px] uppercase">
                Shop now
              </p>
              <img src="/public/images/icon-arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
