//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Home from "./component/home.jsx";

let counter = 0
//import your own components
setInterval(() => {
    counter = counter + 1
    ReactDOM.render(<Home count = {counter}/>, document.querySelector("#app"));
}, 1000);

//render your react application
