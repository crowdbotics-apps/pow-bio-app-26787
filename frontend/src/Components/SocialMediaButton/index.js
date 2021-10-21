import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 185px;
    text-align: left;
    border-radius: 8px;
`

const ButtonText = styled.span`
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: 11px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;

`;

const SocialMediaButton = ({ text, icon }) => {
    return <Button type="button" className="btn btn-secondary">
        <span>
            <span>{icon}</span>
            <ButtonText>{text}</ButtonText>
        </span>
    </Button>
};

export default SocialMediaButton;
