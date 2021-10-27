import styled from "styled-components";
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    padding-top: 104px;
    padding-bottom: 104px;
    padding-left: 313px;
    padding-right: 313px;
    background: #99CC33;
`;

export const Heading = styled(SectionHeading)`
    color: #000093;
    margin-bottom: 16px;
    font-family: 'BrandonGrotesque';
    margin-top: 24px;
    text-align: center;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Avenir';
    color: #414141;
    text-align: center;
`;

