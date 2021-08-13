import React from "react";
import HamburgerComponent from "./HamburgerComponent";

const LiveFeed = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <HamburgerComponent toggled={isOpen} toggle={setOpen} />
      <h1>Live Feed</h1>
    </div>
  );
};
