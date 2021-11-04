import React from 'react';
import ProcessStep from '../../../../Components/ProcessStep';
import { Heading, MarginTopDiv, Paragraph, Section } from './styles';

const HowDoWeDoIt = () => {
    return <Section>
        <div className="container-xxl">
            <Heading>How we do it</Heading>
            <Paragraph>Diam, phasellus at mi donec nisi, porttitor est, dictumst justo, ac, nunc facilisis enim consequat ac nulla sem orci nec, lorem amet sed proin pretium elementum tortor lobortis faucibus eget velit, cum ac sed blandit massa et venenatis morbi magna augue cursus nulla ornare sapien.</Paragraph>

            <MarginTopDiv className="row">
                <div className="col-12 col-md-4 mb-4">
                    <ProcessStep
                        number={1}
                        heading="Microplate to Bioreactor for Proof of Concept"
                        description="Diam posuere faucibus velit porttitor massa nibh faucibus tincidunt tempus tempor, sit morbi imperdiet mi pellentesque leo sit interdum donec sollicitudin pellentesque eget blandit duis egestas eget ac congue turpis" />
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <ProcessStep
                        number={2}
                        heading="Process Optimization for the first gram to the first kilogram"
                        description="Diam posuere faucibus velit porttitor massa nibh faucibus tincidunt tempus tempor, sit morbi imperdiet mi pellentesque leo sit interdum donec sollicitudin pellentesque eget blandit duis egestas eget ac congue turpis" />
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <ProcessStep
                        number={3}
                        heading="Produce material for Business Dev and Regulatory"
                        description="Diam posuere faucibus velit porttitor massa nibh faucibus tincidunt tempus tempor, sit morbi imperdiet mi pellentesque leo sit interdum donec sollicitudin pellentesque eget blandit duis egestas eget ac congue turpis" />
                </div>
            </MarginTopDiv>
        </div>
    </Section>
};

export default HowDoWeDoIt;
