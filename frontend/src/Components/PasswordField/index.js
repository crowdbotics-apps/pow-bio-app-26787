import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordField = ({ field, className }) => {

    const [passwordViewState, setPasswordViewState] = useState(false);

    const onShowPasswordClick = () => {
        setPasswordViewState(prev => !prev);
    }

    return <div className="input-group">
        <input type={passwordViewState ? "text" : "password"} className={`form-control ${className}`} placeholder="Password" {...field} />
        <div className="input-group-append">
            <span className={`input-group-text ${className}`} onClick={onShowPasswordClick}>
                { passwordViewState ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </span>
        </div>
    </div>
};

export default PasswordField;
