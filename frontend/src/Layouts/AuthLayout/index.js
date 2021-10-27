import React from 'react';
import { VHRow, ColIllustration, IllustrationImage, FlexDiv,
        LogoImage, LoginHeading, AuthPageDescription, ContentWrapper,
        ContentInner } from './styles';
import illustration from '../../Assets/images/Drawkit-Vector-Illustration-Medical.svg';
import logo from '../../Assets/logo.png';

const AuthLayout = ({ children, pageTitle }) => {
    return <div className="container-xxl">
        <VHRow className="row">
            <ColIllustration className="col-12 col-md-6">
                <FlexDiv>
                    <IllustrationImage src={illustration} />
                </FlexDiv>
            </ColIllustration>
            <div className="col-12 col-md-6">
                <div className="d-flex justify-content-end mt-2">
                    <LogoImage src={logo} alt="POW.BIO" />
                </div>

                <ContentWrapper className="d-flex justify-content-center align-items-center">
                    <ContentInner>
                        <LoginHeading>{pageTitle}</LoginHeading>
                        <AuthPageDescription>By continuing, you're agreeing to our customer terms of service, privacy policy and cookie policy</AuthPageDescription>
                        {children}
                    </ContentInner>
                </ContentWrapper>
            </div>
        </VHRow>
    </div>
};

export default AuthLayout;
