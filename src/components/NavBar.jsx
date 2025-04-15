import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { animate } from "motion";

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
            ? "/public/images/icon-close.svg"
            : "/public/images/icon-hamburger.svg"
        }
        alt="menu"
        className="absolute left-6 z-50 md:hidden"
        onClick={toggleMenu}
        animate={{ rotate: isMenuShown ? 180 : 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      />

      <div>
        <img src="/public/images/logo.svg" alt="room logo" />
      </div>

      <ul className="hidden gap-4 text-white md:flex">
        <li className="group relative cursor-pointer">
          <span className="absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></span>{" "}
          Home
        </li>
        <li className="group relative cursor-pointer">
          <span className="absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></span>{" "}
          About
        </li>
        <li className="group relative cursor-pointer">
          <span className="absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></span>{" "}
          Services
        </li>
        <li className="group relative cursor-pointer">
          <span className="absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></span>{" "}
          Contact
        </li>
      </ul>

      <AnimatePresence>
        {isMenuShown && (
          <motion.ul
            className="absolute flex h-full w-full items-center justify-end gap-4 bg-white p-6 font-bold drop-shadow-2xl"
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            exit={{ y: -150 }}
            transition={{ duration: 0.2 }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
