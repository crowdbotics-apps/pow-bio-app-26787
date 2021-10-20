import React from "react";
import { useForm, Controller } from "react-hook-form";
import PasswordField from "../../Components/PasswordField";
import SubmitButton from "../../Components/SubmitButton";
import AuthLayout from "../../Layouts/AuthLayout";
import { AlternateOptionLink, BottomAlternateText } from "../../styles";

const SignupPage = ({ onSubmit }) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return <AuthLayout pageTitle="Sign up">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">

                <Controller
                    name="full_name"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "This field is required.",
                    }}
                    render={({ field }) => <input {...field} className="form-control" placeholder="Full Name" />}
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
                    render={({ field }) => <input {...field} className="form-control" placeholder="Email" />}
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
                    render={({ field }) => <PasswordField field={field} />}
                />

                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            <div className="d-grid">
                <SubmitButton type="submit">submit</SubmitButton>
            </div>

            <BottomAlternateText className="text-center mt-4">
                Already have an account? <AlternateOptionLink to="/login">Login</AlternateOptionLink>
            </BottomAlternateText>
        </form>
    </AuthLayout>
};

export default SignupPage;
