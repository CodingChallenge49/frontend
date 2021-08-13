//directly pass the value to be set
export const toggleHamburger = (isOpen) => {
  return {
    type: "TOGGLE_SIDEBAR",
    payload: isOpen,
  };
};

export const isVisible = (selected) => {
  return {
    type: "SELECT_NAV_OPTION",
    payload: selected,
  };
};
