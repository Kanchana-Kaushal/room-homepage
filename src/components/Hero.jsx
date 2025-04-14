import NavBar from "./NavBar";
import Slider from "./Slider";

function Hero() {
  return (
    <header>
      <NavBar />
      <div>
        <Slider />

        <div className="space-y-4 p-8">
          <h1 className="text-custom-very-dark-gray text-4xl font-bold">
            Discover innovative ways to decorate
          </h1>

          <p className="text-custom-dark-gray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <p className="text-custom-very-dark-gray tracking-[10px] uppercase">
              Shop now
            </p>

            <img src="/public/images/icon-arrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
