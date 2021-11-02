import styled from "styled-components";
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    position: relative;
    padding-top: 120px;
    padding-bottom: 120px;
    padding: 7.5rem 2rem;
    overflow: hidden;

    @media only screen and (max-width: 991.98px) {
        padding: 7.5rem 0.5rem;
    }

    @media only screen and (max-width: 767.98px) {
        padding: 7.5rem 0rem;
    }

`;

export const Heading = styled(SectionHeading)`
    color: #000093;
    margin-bottom: 16px;
    font-family: 'BrandonGrotesque';
    margin-top: 24px;
    text-align: center;
    color: #414141;
`;

export const EngagementFlowContainer = styled.div`
    margin-top: 80px;
`;
