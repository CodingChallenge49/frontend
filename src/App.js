import logo from "./logo.svg";
import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import FormComponent from "./components/FormComponent";
import LiveFeed from "./components/LiveFeed";

function App() {
  return (
    <div className="App">
      if (HamburgerComponent.state == true) {
        <SidebarComponent />
      }
      {/* Depending on which sidebar option is selected */}
      <LiveFeed></LiveFeed>
    </div>
  );
}

export default App;
