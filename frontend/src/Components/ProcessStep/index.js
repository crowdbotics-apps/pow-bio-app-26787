import React from "react";
import { Container, Description, Number, Title } from "./styles";

const ProcessStep = ({number, heading, description}) => {
    return <Container>
        <div className="d-flex">
            <Number>{number}</Number>
            <Title>{heading}</Title>
        </div>
        <Description>{description}</Description>
    </Container>
};

export default ProcessStep;
