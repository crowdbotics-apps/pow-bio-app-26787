import styled from "styled-components";

export const VHRow = styled.div`
    height: 100vh;
`;

export const ColIllustration = styled.div`
    background: ${props => props.bgColor};
    position: relative;
    overflow: hidden;
`;

export const ZIndex5Div = styled.div`
    z-index: 5;
`;

export const BgCube = styled.div`
    width: 277px;
    height: 277px;
    background: ${props => props.bgColor};
    border-radius: 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%) rotate(-40.57deg);
    z-index: 2;
`;

export const CustomShapedEclipse = styled.div`
    position: absolute;
    width: 442px;
    height: 339px;
    background-image: url("data:image/svg+xml,%3Csvg width='442' height='339' viewBox='0 0 442 339' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M326.935 53.9158C241.965 38.7147 135.778 -21.8715 66.1071 8.31271C-3.56427 38.4969 -25.4576 102.306 36.0929 216.482C113.031 359.203 230.129 346.957 308.335 327.112C386.541 307.266 444.456 201.281 441.92 151.456C439.383 101.63 411.906 69.1168 326.935 53.9158Z' fill='${props => props.bgColor.replace("#", "%23")}'/%3E%3C/svg%3E%0A");
    z-index: 1;
    top: 65%;
    left: 39%;
    transform: translate(-50%, -50%);
`;

export const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const IllustrationImage = styled.img`
    width: 90%;
    max-width: 420px;
    display: block;
    z-index: 3;
`;

export const LogoImage = styled.img`
    display: inline-block;
    width: 100px;
`;

export const LoginHeading = styled.h1`
    color: ${props => props.textColor};
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 55px;
`;

export const AuthPageDescription = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: #414141;
`;

export const ContentWrapper = styled.div`
    height: 100vh;
`;


export const ContentInner = styled.div`
    width: 350px;
    height: auto;
`;
