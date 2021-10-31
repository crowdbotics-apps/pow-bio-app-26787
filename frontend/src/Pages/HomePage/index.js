import React from "react";
import ContactUs from "./Sections/ContactUs";
import EngagementFlow from "./Sections/EngagementFlow";
import FAQ from "./Sections/FAQ";
import Hero from "./Sections/Hero";
import HowDoWeDoIt from "./Sections/HowDoWeDoIt";
import OurCompany from "./Sections/OurCompany";

const HomePage = () => {
    return <div>
            <Hero />
            <OurCompany />
            <HowDoWeDoIt />
            <EngagementFlow />
            <FAQ />
            <ContactUs />
        <section style={{ height: '48px', background: '#414141' }}></section>
    </div>
};

export default HomePage;
