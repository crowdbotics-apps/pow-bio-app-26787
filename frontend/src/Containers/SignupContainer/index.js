import React from "react";
import SignupPage from "../../Pages/SignupPage";

const SignupContainer = () => {
    const onSubmit = data => console.log(data);
    return <SignupPage onSubmit={onSubmit} />
};

export default SignupContainer;