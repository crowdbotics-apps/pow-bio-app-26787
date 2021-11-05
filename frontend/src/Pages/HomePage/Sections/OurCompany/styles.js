import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    background: #FFFFFF;
    margin-top: 6rem;
    padding: 3rem 2rem;

    @media only screen and (max-width: 991.98px) {
        padding: 3rem 0.5rem;
    }
`;

export const Heading = styled(SectionHeading)`
    font-family: 'BrandonGrotesque';
    font-size: 24px;
    text-align: left;
    color: #414141;

    margin-top: 24px;
    margin-bottom: 48px;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #414141;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 26px;
`;

export const OurCompanyImage = styled.img`
    border-radius: 10px;
    max-width: 100%;
`;

export const LearnMoreLink = styled.button`
    text-decoration: none;
    padding: 0;
    border: none;
    color: #000093;
    width: 158px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover span{
        font-weight: 600;
        color: #000093;
    }
`;

export const LongLeftArrowButton = styled.span`
    border: 2px solid #000093;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 1.1405px 16px;
    margin-left: 8px;
    display: inline-block;
`;

