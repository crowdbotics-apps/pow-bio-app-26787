import React from 'react';
import ourCompanyImage from '../../../../Assets/images/our-company.jpg';
import { LongLeftArrow } from '../../../../Components/Icons';
import { Heading, Paragraph, Section, OurCompanyImage, LearnMoreLink, LongLeftArrowButton } from './styles';

const OurCompany = () => {
    return <Section>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 col-md-6">
                    <Heading>our company - who we are</Heading>
                    <Paragraph>
                        Diam, phasellus at mi donec nisi, porttitor est, dictumst justo, ac, nunc facilisis enim consequat ac nulla sem orci nec, lorem amet sed proin pretium elementum tortor lobortis faucibus eget velit, cum ac sed blandit massa et venenatis morbi magna augue cursus nulla ornare sapien.
                    </Paragraph>
                    <Paragraph>
                        Diam, phasellus at mi donec nisi, porttitor est, dictumst justo, ac, nunc facilisis enim consequat ac nulla sem orci nec, lorem amet sed proin pretium elementum tortor lobortis faucibus eget velit, cum ac sed blandit massa et venenatis morbi magna augue cursus nulla ornare sapien
                    </Paragraph>
                    <div className="d-flex align-items-center">
                        <LearnMoreLink type="button" className="btn btn-link">Learn more</LearnMoreLink>
                        <LongLeftArrowButton className="btn btn-outline-primary"><LongLeftArrow /></LongLeftArrowButton>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <OurCompanyImage src={ourCompanyImage} alt="" />
                </div>
            </div>
        </div>
    </Section>
};

export default OurCompany;
