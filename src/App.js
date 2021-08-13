import logo from "./logo.svg";
import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import FormComponent from "./components/FormComponent";
import LiveFeed from "./components/LiveFeed";
import { connect } from "react-redux";
import HamburgerComponent from "./components/HamburgerComponent";

function App(props) {
  // console.log(props.isOpen);
  let display = null;
  if (props.isOpen == true) {
    display = <SidebarComponent />;
  }
  // console.log(display);
  return (
    <div className="App">
      <SidebarComponent />
    </div>
  );
}
//First Parameter
//we have to convert that state into props and pass them into APP
// we are extracting what we want from the whole state

const mapStateToProps = (state) => {
  //this is that global state
  return { isOpen: state.isOpen };
};
//we are first connecting it using that connect
export default connect(mapStateToProps)(App);
//connect contains to parameters
