import React, { useState } from "react";
import Hamburger from "hamburger-react";

const HamburgerComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default HamburgerComponent;
