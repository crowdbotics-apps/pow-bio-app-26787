import React from 'react';
import SubmitButton from '../../../../Components/SubmitButton';
import { Heading, Paragraph, Section, SectionInner } from './styles';

const GetStarted = () => {
    return <Section>
        <SectionInner>
            <Heading>Get started</Heading>
            <Paragraph>Venenatis faucibus tortor felis scelerisque est accumsan purus pellentesque tempus ultricies.</Paragraph>
            <SubmitButton 
                style={{ 
                    width: "100%",
                    background: '#FFFFFF',
                    border: 'none',
                    color: '#414141'
                }} type="button">power up</SubmitButton>
        </SectionInner>
    </Section>
};

export default GetStarted;
