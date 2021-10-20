import React from "react";
import { NativeButton } from "./styles";

const SubmitButton = ({ children, ...props }) => {
    return <NativeButton className="btn btn-primary" type="button" { ...props }>{children}</NativeButton>
}

export default SubmitButton;
