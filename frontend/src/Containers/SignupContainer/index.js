import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupPage from "../../Pages/SignupPage";
import { apiSignupRequest } from "../../Redux/actions/signup";

const SignupContainer = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const onSubmit = data => {
        dispatch(apiSignupRequest(data));
    };

    useEffect(() => {
        console.log("auth: ", auth);
        if (auth.token) {
            console.log("Redicrect to User Area");
        }
    }, [auth]);

    return <SignupPage onSubmit={onSubmit} />
};

export default SignupContainer;
