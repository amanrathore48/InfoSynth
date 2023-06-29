import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 h-[75px]">
      <img src="/logo-nav.png" alt="logo" className="h-11 object-contain" />

      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/amanrathore48/InfoSynth", "_blank")
        }
        className="black_btn"
      >
        GitHub
      </button>
    </nav>
  );
};

export default Nav;
