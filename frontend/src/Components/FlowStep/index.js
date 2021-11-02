import React from "react";
import { DownChevron } from "../Icons";
import { DownChevronContainer, FlowNumberFlex, FlowWrapper, NumberCircle, FlowDetailsContainer, FlowHeading, FlowDescription } from "./styles";

const isEven = (value) => {
	if (value % 2 === 0)
		return true;
	else
		return false;
}

const FlowStep = ({ number, icon, title, description, isLast=false }) => {
    return <div className={`container-xxl d-flex pe-0 ps-0 ${isEven(number) ? "justify-content-start" : "justify-content-end"}`}>
        <FlowWrapper isEven={isEven(number)}>
            <FlowNumberFlex className="d-flex flex-column">
                <NumberCircle>{number}</NumberCircle>
                {
                    !isLast ? <>
                        <DownChevronContainer>
                            <DownChevron />
                        </DownChevronContainer>
                        <DownChevronContainer>
                            <DownChevron />
                        </DownChevronContainer>                    
                    </> : <></>
                }

            </FlowNumberFlex>
            <FlowDetailsContainer isEven={isEven(number)}>
                <div className="d-flex align-items-center">
                    {icon}
                    <FlowHeading>{title}</FlowHeading>
                </div>
                <FlowDescription>
                    {description}
                </FlowDescription>
            </FlowDetailsContainer>
        </FlowWrapper>
    </div>
};

export default FlowStep;
