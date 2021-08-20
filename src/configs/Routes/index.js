import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AccessibleNavigationAnnouncer from "../../components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("../../containers/Layout"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));

const Routes = () => {
  return (
    <>
      <Router>
        {/* <AccessibleNavigationAnnouncer /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={Register} />
          {/* Place new routes over this */}
          <Route path="/" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          {/* <Redirect exact from="/" to="/login" /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
