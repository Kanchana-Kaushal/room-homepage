import { useState } from "react";

function NavBar() {
  const [isMenuShwon, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown((prev) => !prev);
  }

  return (
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
  );
}

export default NavBar;
