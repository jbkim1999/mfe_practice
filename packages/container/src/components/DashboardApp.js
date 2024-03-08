import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

// This is just a div
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, []);

    return (
        <div ref={ref} /> 
    )
}
