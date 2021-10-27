import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SignupPage from "../../Pages/SignupPage";
import { apiSignupRequest } from "../../Redux/actions/signup";

const SignupContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.auth);

    const onSubmit = data => {
        dispatch(apiSignupRequest(data));
    };

    useEffect(() => {
        console.log("auth: ", auth);
        if (auth.token) {
            history.push('/dashboard');
        }
    }, [auth]);

    return <SignupPage onSubmit={onSubmit} />
};

export default SignupContainer;
