import React from "react";

import LoginPage from "../../Pages/LoginPage";

const LoginContainer = () => {
    const onSubmit = data => console.log(data);
    return <LoginPage onSubmit={onSubmit}/>;
};

export default LoginContainer;
