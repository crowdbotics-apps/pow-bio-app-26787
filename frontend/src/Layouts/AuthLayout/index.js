import React from 'react';
import { VHRow, ColIllustration, IllustrationImage, FlexDiv,
        LogoImage, LoginHeading, AuthPageDescription, ContentWrapper,
        ContentInner, 
        BgCube,
        CustomShapedEclipse, ZIndex5Div, BigFormCube} from './styles';
import illustration from '../../Assets/images/login-illustration.png';
import Logo from '../../Components/Logo';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, pageTitle, 
        bgColor="#3333A9",
        bigCubeColor="rgba(224,87,43,0.07)",
        cubeColor="#1F1F65",
        eclipseColor="#292987" }) => {
    return <div className="container-xxl">
        <VHRow className="row">
            <ColIllustration bgColor={bgColor} className="col-12 col-md-6">
                <ZIndex5Div className="container d-flex justify-content-start mt-3">
                    <Link to="/"><Logo /></Link>
                </ZIndex5Div>
                <FlexDiv>
                    <IllustrationImage src={illustration} />
                </FlexDiv>
                <BgCube bgColor={cubeColor} />
                <CustomShapedEclipse bgColor={eclipseColor} />
            </ColIllustration>
            <div className="col-12 col-md-6">
                <ContentWrapper className="d-flex justify-content-center align-items-center">
                    <BigFormCube bgColor={bigCubeColor} />
                    <ContentInner>
                        <LoginHeading textColor={bgColor}>{pageTitle}</LoginHeading>
                        <AuthPageDescription>By continuing, you're agreeing to our customer terms of service, privacy policy and cookie policy</AuthPageDescription>
                        {children}
                    </ContentInner>
                </ContentWrapper>
            </div>
        </VHRow>
    </div>
};

export default AuthLayout;
