import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingSus from "../components/LoadingSus";
import Nav from "../components/Nav";
import Main from "./Main";
import routes from "../configs/Routes/routes";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
const Page404 = lazy(() => import("../pages/Page404"));

const Layout = () => {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="layout">
      <div className="lay-side">
        <Nav />
      </div>
      <div className="lay-main">
        <div className="main-top">
          <Header />
        </div>
        <div className="main-body">
          <Main>
            <Suspense fallback={<LoadingSus />}>
              <Switch>
                {routes.map((route, i) => {
                  return route.component ? (
                    <Route
                      key={i}
                      exact={true}
                      path={`/${route.path}`}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect exact from="/" to="/dashboard/" />
                <Route component={Page404} />
              </Switch>
              {!isLogin && <Redirect exact from="/dashboard" to="/login" />}
            </Suspense>
          </Main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
