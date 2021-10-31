import styled from "styled-components";

export const FlowContainer = styled.div`
`;

export const FlowDetailsContainer = styled.div`
    max-width: 290px;
    ${props => props.isEven ? 'margin-right: 80px;' : 'margin-left: 80px;'};
`;

export const FlowHeading = styled.h3`
    font-family: 'BrandonGrotesque';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #E0572B;
    margin-bottom: 0;
    margin-left: 8px;
`;

export const FlowDescription = styled.p`
    margin-top: 8px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    color: #414141;    
`;

export const FlowWrapper = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: ${props => props.isEven ? 'row-reverse' : 'row'};
    ${props => props.isEven ? 'right: -30.5px;' : 'left: -30.5px;'};
`;


export const FlowNumberFlex = styled.div`

`;

export const NumberCircle = styled.div`
    width: 61px;
    height: 61px;
    border-radius: 50%;
    border: 2px solid #E0572B;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 100%;  
    color: #E0572B;
`;

export const DownChevronContainer = styled.div`
    width: 61px;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

