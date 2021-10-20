import React from "react";
import { Link } from "react-router-dom";
import PasswordField from "../../Components/PasswordField";
import AuthLayout from "../../Layouts/AuthLayout";

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
                <button className="btn btn-primary" type="button">submit</button>
            </div>

            <p className="text-center mt-4">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    </AuthLayout>
};

export default SignupPage;
