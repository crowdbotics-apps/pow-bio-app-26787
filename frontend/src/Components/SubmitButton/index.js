import React from "react";
import { NativeButton } from "./styles";

const SubmitButton = ({ children, loading = false, ...props }) => {
    return <NativeButton className="btn btn-primary" disabled={loading} {...props}>
        {loading ? <>
            <span className="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
            <span className="text-light ms-2">Loading...</span></> : children}
    </NativeButton>
}

export default SubmitButton;
