import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history"; // react-router-dom uses this
import App from "./App";

const mount = (htmlElem, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        htmlElem
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

if (process.env.NODE_ENV === "development") {
    const dev = document.querySelector("#_marketing-dev");

    if (dev) {
        mount(dev, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };
