import React from "react";
import { Link } from "react-router-dom";
import PasswordField from "../../Components/PasswordField";
import AuthLayout from "../../Layouts/AuthLayout";

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
                <Link to="/signup">Forget Password</Link>
            </p>

            <div className="d-grid">
                <button className="btn btn-primary" type="button">submit</button>
            </div>

            <p className="text-center mt-4">
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </form>
    </AuthLayout>
};

export default LoginPage;
