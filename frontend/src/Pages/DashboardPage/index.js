import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { clearToken } from '../../Redux/actions/login';


const DashboardPage = () => {
    const [logoutClicked, setLogoutClicked] = useState();
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogoutClicked = () => {
        setLogoutClicked(true);
        dispatch(clearToken());
    }

    useEffect(() => {
        if (logoutClicked && auth.token === null) {
            history.push('/login');
        }
    }, [logoutClicked, auth]);

    return <div className="container-xxl">
        <h1>Dashboard</h1>
        <button className="btn btn-primary" onClick={onLogoutClicked}>Logout</button>
    </div>

};

export default DashboardPage;