import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (htmlElem) => {
    const app = createApp(Dashboard);
    app.mount(htmlElem);
};

if (process.env.NODE_ENV === "development") {
    const dev = document.querySelector("#_dashboard-dev");

    if (dev) {
        mount(dev);
    }
}

export { mount };
