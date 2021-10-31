import styled from "styled-components";
import { Link } from "react-router-dom";

export const BottomAlternateText = styled.p`
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #414141;
`;

export const AlternateOptionLink = styled(Link)`
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 150%;
    color: ${props => props.textColor};
    text-decoration: none;
`;

// section styles
export const SectionHeading = styled.h1`
    font-family: 'BrandonGrotesque';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 100%;
    text-transform: uppercase;
`;

export const SectionParagraph = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
`;
