import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (htmlElem) => {
    ReactDOM.render(
        <App />,
        htmlElem
    );
};

if (process.env.NODE_ENV === "development") {
    const dev = document.querySelector("#_marketing-dev");

    if (dev) {
        mount(dev);
    }
}

export { mount };
