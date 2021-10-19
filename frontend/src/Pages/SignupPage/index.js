import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const SignupPage = () => {
    return <AuthLayout pageTitle="Sign up">
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Full Name" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            <p className="text-end">
                <Link to="/signup">Forget Password</Link>
            </p>

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
