import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown((prev) => !prev);
  }

  return (
    <nav className="absolute z-50 flex w-full items-center justify-center p-8 md:justify-start md:gap-8">
      <motion.img
        src={
          isMenuShown
            ? "/room-homepage/images/icon-close.svg"
            : "/room-homepage/images/icon-hamburger.svg"
        }
        alt={isMenuShown ? "Close menu" : "Open menu"}
        className="absolute left-6 z-50 cursor-pointer md:hidden"
        onClick={toggleMenu}
        role="button"
        aria-label={isMenuShown ? "Close menu" : "Open menu"}
        animate={{ rotate: isMenuShown ? 180 : 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      />

      <div>
        <img src="/room-homepage/images/logo.svg" alt="Room homepage logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden gap-4 text-white md:flex">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item} className="group relative cursor-pointer">
            <span className="absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></span>
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuShown && (
          <motion.ul
            className="text-custom-very-dark-gray absolute top-0 left-0 z-40 flex h-full w-full items-center justify-end gap-4 bg-white p-6 font-bold drop-shadow-2xl"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{ duration: 0.2 }}
          >
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
