import React from 'react';
import { useHistory } from 'react-router';
import SubmitButton from '../../../../Components/SubmitButton';
import { Heading, Paragraph, Section, SectionInner } from './styles';

const GetStarted = () => {

    const history = useHistory();

    const onPowerUpClicked = () => {
        history.push('/questionnaire');
    };

    return <Section>
        <SectionInner>
            <Heading>Get started</Heading>
            <Paragraph>Venenatis faucibus tortor felis scelerisque est accumsan purus pellentesque tempus ultricies.</Paragraph>
            <SubmitButton
                onClick={onPowerUpClicked}
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
