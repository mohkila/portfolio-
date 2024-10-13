"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function Responcivena() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNavbar showNav={showNav} closeNavHandler={closeNavHandler} />
    </div>
  );
}

export default Responcivena;
