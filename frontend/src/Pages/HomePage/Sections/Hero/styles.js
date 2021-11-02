import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '../../../../styles';

export const Section = styled.section`
    color: white;
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 3rem 2rem;
    width: 100%;
    z-index: 2;
    padding-top: 0;
    padding-bottom: 7.5rem;

    &::before {
        content: '';
        display: block;
        background: #E0572B;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        border-radius: 140vw;
        width: 290vw;
        height: 290vw;
        z-index: -1;
    }

    @media only screen and (max-width: 991.98px) {
        padding: 3rem 0.5rem;
        padding-bottom: 8rem;
    }
`;

export const LinkButton = styled.button`
    text-decoration: none;
    color: #f8f9fa;
`;

export const Nav = styled.nav`
    margin-bottom: 6rem;
`;

export const Heading = styled(SectionHeading)`
    color: #FFFFFF;
    margin-bottom: 16px;
    font-family: 'BrandonGrotesque';
    margin-top: 24px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    text-transform: none;
`;

export const Paragraph = styled(SectionParagraph)`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    text-align: left;
    font-style: normal;
    font-weight: normal;
`;

export const FermentationPlantImage = styled.img`
    display: block;
    width: 100%;
    margin-top: -8rem;
    @media only screen and (max-width: 991.98px) {
        margin-top: -4rem;
    }

    @media only screen and (max-width: 767.98px) {
        margin-top: 2rem;
    }
`;

