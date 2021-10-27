import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';
import PasswordField from "../../Components/PasswordField";
import SubmitButton from "../../Components/SubmitButton";
import AuthLayout from "../../Layouts/AuthLayout";
import { AlternateOptionLink, BottomAlternateText } from "../../styles";
import { ForgetPasswordText } from "./styles";

const LoginPage = ({ onSubmit }) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const auth = useSelector(state => state.auth);

    return <AuthLayout pageTitle="Log in">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "This field is required.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid e-mail address",
                        }
                    }}
                    render={({ field }) => <input {...field} className="form-control" placeholder="Email" />}
                />

                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            <div className="mb-3">
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "This field is required."
                    }}
                    render={({ field }) => <PasswordField field={field} />}
                />

                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}

            </div>

            <p className="text-end mb-5">
                <ForgetPasswordText to="/signup">Forget Password</ForgetPasswordText>
            </p>

            <div className="d-grid">
                <SubmitButton type="submit" loading={auth.isLoading}>submit</SubmitButton>
            </div>

            { auth.error !== null ?
                <div className="mt-3">
                    <div className="alert text-center alert-danger" role="alert">
                        { auth.error.message }
                    </div>
                </div>
            : <></> }

            <BottomAlternateText className="text-center mt-4">
                Don’t have an account? <AlternateOptionLink to="/signup">Sign up</AlternateOptionLink>
            </BottomAlternateText>
        </form>
    </AuthLayout>
};

export default LoginPage;
