import styled from "styled-components";
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    background: #3F89E3;
    padding: 7rem 3rem;
    
    @media only screen and (max-width: 991.98px) {
        padding: 7rem 0.5rem;
    }
`;

export const Heading = styled(SectionHeading)`
    font-family: 'BrandonGrotesque';
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 24px;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    line-height: 160%;
    max-width: 815px;
    margin: 0 auto;
`;