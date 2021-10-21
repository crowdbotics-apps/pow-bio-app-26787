import React from "react";
import ContactUs from "./Sections/ContactUs";

const HomePage = () => {
    return <div>
        <div className="container-xxl">
            <div className="mt-4"></div>
            <ContactUs />
        </div>
        <section style={{ height: '48px', background: '#414141' }}></section>
    </div>
};

export default HomePage;
