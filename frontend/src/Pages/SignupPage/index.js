import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import PasswordField from "../../Components/PasswordField";
import SubmitButton from "../../Components/SubmitButton";
import AuthLayout from "../../Layouts/AuthLayout";
import { AlternateOptionLink, BottomAlternateText } from "../../styles";

const SignupPage = ({ onSubmit }) => {

    const [message, setMessage] = useState(null);
    const signup = useSelector(state => state.signup);

    useEffect(() => {
        let responseMessage = null;

        if (signup.success === true) {
            responseMessage = "Your account has been created successfully. Please check your email address for verification.";
            reset({
                name: "",
                email: "",
                password: ""
            });
        } else if (signup.error != null) {
            if (typeof signup.error.message === 'string'){ 
                responseMessage = signup.error.message;
            } else {
                if (signup.error.message.length === 1) {
                    responseMessage = signup.error.message[0];
                } else {
                    responseMessage = ( <ul>{ signup.error.message.map(e => <li>{e}</li>) }</ul> )
                }
            }
        }

        setMessage(responseMessage);
    }, [signup]);

    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    return <AuthLayout
            pageTitle="Sign up"
            bgColor="#E0572B"
            cubeColor="#D35028"
            eclipseColor="#D14829">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">

                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "This field is required.",
                    }}
                    render={({ field }) => <input {...field} className="form-control signup-field" placeholder="Full Name" />}
                />

                {errors.full_name && <div className="invalid-feedback">{errors.full_name.message}</div>}

            </div>

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
                    render={({ field }) => <input {...field} className="form-control signup-field" placeholder="Email" />}
                />

                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            <div className="mb-5">
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "This field is required."
                    }}
                    render={({ field }) => <PasswordField field={field} className="signup-field" />}
                />

                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            <div className="d-grid">
                <SubmitButton type="submit" style={{ background: "#E0572B", border: 'none' }} loading={signup.isLoading}>submit</SubmitButton>
            </div>


            {(signup.success === true) || (signup.error !== null) ?
                <div className="mt-3">
                    <div className={`alert text-center ${signup.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {message}
                    </div>
                </div>
                : <></>}

            <BottomAlternateText className="text-center mt-4">
                Already have an account? <AlternateOptionLink textColor="#E0572B" to="/login">Login</AlternateOptionLink>
            </BottomAlternateText>
        </form>
    </AuthLayout>
};

export default SignupPage;
