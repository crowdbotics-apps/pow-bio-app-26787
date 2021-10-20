import React from "react";
import PasswordField from "../../Components/PasswordField";
import SubmitButton from "../../Components/SubmitButton";
import AuthLayout from "../../Layouts/AuthLayout";
import { AlternateOptionLink, BottomAlternateText } from "../../styles";

const SignupPage = () => {
    return <AuthLayout pageTitle="Sign up">
        <form className="mt-5">
            <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Full Name" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="mb-5">
                <PasswordField />
            </div>

            <div className="d-grid">
                <SubmitButton>submit</SubmitButton>
            </div>
            
            <BottomAlternateText className="text-center mt-4">
                Already have an account? <AlternateOptionLink to="/login">Login</AlternateOptionLink>
            </BottomAlternateText>
        </form>
    </AuthLayout>
};

export default SignupPage;
