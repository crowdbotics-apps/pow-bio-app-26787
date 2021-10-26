import React from "react";
import { useDispatch } from "react-redux";

import LoginPage from "../../Pages/LoginPage";
import { apiLoginRequest } from "../../Redux/actions/login";

const LoginContainer = () => {
    const dispatch = useDispatch();

    const onSubmit = data => {
        console.log("Data: ", data);
        dispatch(apiLoginRequest(data));
    };

    return <LoginPage onSubmit={onSubmit}/>;
};

export default LoginContainer;
