import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 200px;
    padding-right: 200px;
    
    @media only screen and (max-width: 991.98px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`;

export const Heading = styled(SectionHeading)`
    color: #000093;
    margin-bottom: 16px;
    font-family: 'BrandonGrotesque';
    margin-top: 24px;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Avenir';
    color: #000093;
    max-width: 390px;
`;

export const ContactUsFormContainer = styled.div`
    background: #E67955;
    border-radius: 10px;
    padding: 40px 24px;
`;


