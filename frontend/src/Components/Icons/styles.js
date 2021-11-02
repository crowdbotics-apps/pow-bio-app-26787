import styled from "styled-components";
import introMeetingImage from '../../Assets/images/intro-meeting.png';
import ndaImage from '../../Assets/images/nda.png';
import inboundItWorksheet from '../../Assets/images/inbound-it-worksheet.png';
import signDocsStart from '../../Assets/images/sign-docs-start.png';
import statementOfWork from '../../Assets/images/statement-of-work.png';

export const Icon = styled.span`
    display: inline-block;
    width: 48px;
    height: 48px;
    background-size: contain;
`;

export const IntroMeetingIcon = styled(Icon)`
    background-image: url(${introMeetingImage});
`;

export const NDAIcon = styled(Icon)`
    background-image: url(${ndaImage});
`;

export const InboundItWorksheet = styled(Icon)`
    background-image: url(${inboundItWorksheet});
`;

export const SignDocsStart = styled(Icon)`
    background-image: url(${signDocsStart});
`;

export const StatementOfWork = styled(Icon)`
    background-image: url(${statementOfWork});
`;
