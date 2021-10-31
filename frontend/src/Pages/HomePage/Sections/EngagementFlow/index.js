import React from "react";
import FlowStep from "../../../../Components/FlowStep";
import { Heading, Section, EngagementFlowContainer } from "./styles";
import { IntroMeetingIcon, NDAIcon, InboundItWorksheet,
    SignDocsStart, StatementOfWork } from "../../../../Components/Icons/styles";
import Cube from "../../../../Components/Cube";

const EngagementFlow = () => {
    return <Section>
        <Heading>Pow engagement flow</Heading>
        <EngagementFlowContainer className="container-xxl">
            <FlowStep 
                number={1}
                icon={<IntroMeetingIcon />}
                title="Intro meeting"
                description="Non-confidential Zoom mtg to understand customer goals and needs and whether Pow is a fit." />
            
            <FlowStep
                number={2}
                icon={<NDAIcon />}
                title="NDA"
                description="Sign our NDA or yours so we can get into details about your bioprocess and goals" />
            
            <FlowStep
                number={3}
                icon={<InboundItWorksheet />}
                title="Inbound TT worksheet"
                description="You complete our inbound Tech-Transfer worksheet with details of your strain, goals, data so far, and assay to quantitate what matters." />
            
            <FlowStep
                number={4}
                icon={<SignDocsStart />}
                title="Sign docs and Start"
                description="Finalize documentation, ship strains to Pow on dry ice, and begin work." />
            
            <FlowStep
                number={5}
                icon={<StatementOfWork />}
                title="Statement of Work"
                isLast={true}
                description="Meet again with Pow to agree on deliverables, timeline, and goals" />

            {/* left and right border cubes */}
            <Cube size={100} borderRadius={20} style={{ bottom: '-50px', right: '65px' }} />
            <Cube size={100} borderRadius={20} style={{ top: '-20px', left: '65px' }} />

            {/* mini cubes */}
            <Cube size={50} borderRadius={10} style={{ left: '150px', bottom: '76px' }} />
            <Cube size={50} borderRadius={10} style={{ right: '150px', top: '76px' }} />

            {/* Right medium cube */}
            <Cube size={150} borderRadius={30} style={{ right: '-60px', bottom: '400px' }} />

            {/* Left big cube */}
            <Cube size={355} borderRadius={40} style={{ left: '-300px', bottom: '500px' }} />

        </EngagementFlowContainer>
    </Section>
};

export default EngagementFlow;
