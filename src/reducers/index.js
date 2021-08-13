import { combineReducers } from "redux";

//first initialization should be provided
const showSidebar = (isOpen = false, action) => {
  if (action.type == "TOGGLE_SIDEBAR") return action.payload;
  return isOpen;
};

const selectedNav = (option = "live", action) => {
  if (action.type == "SELECT_NAV_OPTION") {
    return action.payload;
  }
  return option;
};
const reducers = combineReducers({
  isOpen: showSidebar,
  selectedNavOption: selectedNav,
});

export default reducers;
