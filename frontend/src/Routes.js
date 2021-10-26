import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardContainer from "./Containers/DashboardContainer";

import HomeContainer from "./Containers/HomeContainer";
import LoginContainer from "./Containers/LoginContainer";
import SignupContainer from "./Containers/SignupContainer";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/signup">
                    <SignupContainer />
                </Route>
                <Route path="/dashboard">
                    <DashboardContainer />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
