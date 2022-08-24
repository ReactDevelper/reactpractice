import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App2 from "./App2";
import App3 from "./App3";
import UseStateArray from "./Components/UseStateArray";
import Task1 from "./Components/Task1";
import UseStateObject from "./Components/UseStateObject";
import TodoChallenge from "./Components/TodoChallenge";
import Todo from "./Components/Todo";
import UseEffect1 from "./Components/UseEffect1";
import FetchPractice from "./Components/FetchPractice";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";
import CoustomersReview from "./Components/CoustomersReview";
import ErrorPage from "./Components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    {/* <App3/> */}
    {/* <UseStateArray/> */}
    {/* <Task1/> */}
    {/* <TodoChallenge/> */}
    {/* <UseStateObject/> */}
    {/* <Todo /> */}
    {/* <UseEffect1/> */}
    {/* <FetchPractice/> */}
    <Routing/>
    {/* <ErrorPage/> */}
    {/* <Footer/> */}
    {/* <CoustomersReview /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
