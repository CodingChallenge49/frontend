import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LiveFeed from "./components/LiveFeed";
import FormComponent from "./components/FormComponent";
import SidebarComponent from "./components/SidebarComponent";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <SidebarComponent></SidebarComponent>
//     {/* <LiveFeed></LiveFeed> */}
//     {/* <FormComponent></FormComponent> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
      <FormComponent></FormComponent>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
