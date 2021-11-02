import React, { useState, useEffect } from 'react';
import Logo from '../../../../Components/Logo';
import fermentation from '../../../../Assets/images/fermentation.png';
import { FermentationPlantImage, Heading, LinkButton, Nav, Paragraph, Section } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../../../../Redux/actions/login';

const Hero = () => {
    const [logoutClicked, setLogoutClicked] = useState();
    const auth = useSelector(state => state.auth);
    const history = useHistory()    
    const dispatch = useDispatch();

    const onLogout = () => {
        setLogoutClicked(true);
        dispatch(clearToken());
    }

    useEffect(() => {
        if (logoutClicked && auth.token === null) {
            history.push('/login');
        }
    }, [logoutClicked, auth]);

    return <Section>
        <div className="container-xxl">
            <Nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand"><Logo /></a>
                    <div className="d-flex mt-3 mt-sm-0">
                        { auth.token ? 
                            <button type="button" className="btn btn-outline-light" onClick={onLogout}>Logout</button>
                        :
                            <Link className="btn btn-outline-light" to="/login">Log in</Link>
                        }
                        <LinkButton type="button" className="btn btn-link">About</LinkButton>
                    </div>
                </div>
            </Nav>
            <Heading>Intelligent Fermentation</Heading>
            <Paragraph>Services for industrial and synthetic biology, helping turn great ideas <br />into profitable products.</Paragraph>
            <FermentationPlantImage src={fermentation} alt="" />
        </div>
    </Section>
};

export default Hero;
