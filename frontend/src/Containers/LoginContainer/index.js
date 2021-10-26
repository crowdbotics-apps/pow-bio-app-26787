import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginPage from "../../Pages/LoginPage";
import { apiLoginRequest } from "../../Redux/actions/login";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        console.log("Auth: ", auth);
        if (auth.token) {
            console.log("Redicrect to User Area");
        }
    }, [auth]);

    const onSubmit = data => {
        console.log("Data: ", data);
        dispatch(apiLoginRequest(data));
    };

    return <LoginPage onSubmit={onSubmit}/>;
};

export default LoginContainer;
