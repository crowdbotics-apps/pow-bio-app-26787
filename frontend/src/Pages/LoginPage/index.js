import React from "react";
import PasswordField from "../../Components/PasswordField";
import SubmitButton from "../../Components/SubmitButton";
import AuthLayout from "../../Layouts/AuthLayout";
import { AlternateOptionLink, BottomAlternateText } from "../../styles";
import { ForgetPasswordText } from "./styles";

const LoginPage = () => {
    return <AuthLayout pageTitle="Log in">
        <form className="mt-5">
            <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="mb-3">
                <PasswordField />
            </div>

            <p className="text-end mb-5">
                <ForgetPasswordText to="/signup">Forget Password</ForgetPasswordText>
            </p>

            <div className="d-grid">
                <SubmitButton>submit</SubmitButton>
            </div>
            
            <BottomAlternateText className="text-center mt-4">
                Don’t have an account? <AlternateOptionLink to="/signup">Sign up</AlternateOptionLink>
            </BottomAlternateText>
        </form>
    </AuthLayout>
};

export default LoginPage;
