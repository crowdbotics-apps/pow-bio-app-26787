import React, { useEffect } from "react";
import DashboardPage from "../../Pages/DashboardPage";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

const DashboardContainer = () => {

    const auth = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (auth.token === null) {
            history.push('/login');
        }
    }, [auth]);

    return <DashboardPage />
};

export default DashboardContainer;
