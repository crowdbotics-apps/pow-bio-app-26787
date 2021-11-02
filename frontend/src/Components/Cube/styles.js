import styled from "styled-components";

export const CubeDiv = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.borderRadius}px;
    background: #C5DCF7;
    transform: rotate(-135deg);
    position: absolute;
    z-index: -1;
`;


