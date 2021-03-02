import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {Layout} from "../_metronic/layout";
import BasePage from "./BasePage";
import AdminBasePage from "./AdminBasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { DashboardPage } from "./pages/Admin/DashboardPage";

export function Routes() {
    const {isAuthorized} = useSelector(
        ({auth}) => ({
            isAuthorized: auth.user == null,
        }),
        shallowEqual
    );

    console.log("isAuth:", isAuthorized)

    return (
        <Switch>
            {!isAuthorized ? (
                <BasePage/>
            ) : (
                <Redirect from="/auth" to="/admin"/>
            )}

            <Layout>
                <AdminBasePage />
            </Layout>
            <Route path="/admin" component={DashboardPage} />
            <Route path="/error" component={ErrorsPage} />
            <Route path="/logout" component={Logout}/>
        </Switch>
    );
}
