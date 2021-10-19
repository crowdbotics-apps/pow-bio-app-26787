import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/AuthLayout";

const LoginPage = () => {
    return <AuthLayout pageTitle="Log in">
        <form>
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
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </form>
    </AuthLayout>
};

export default LoginPage;
