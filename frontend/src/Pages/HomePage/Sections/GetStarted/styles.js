import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    padding-top: 120px;
    padding-bottom: 120px;
    background: #E0572B;
`;

export const SectionInner = styled.div`
    max-width: 394px;
    width: 95%;
    margin: 0 auto;
`;

export const Heading = styled(SectionHeading)`
    color: #FFFFFF;
    margin-bottom: 16px;
    text-align: center;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Avenir';
    color: #FFFFFF;
    max-width: 390px;
    text-align: center;
    margin-bottom: 36px;
`;