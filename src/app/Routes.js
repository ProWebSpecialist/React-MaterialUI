import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {Layout} from "../_metronic/layout";
import BasePage from "./BasePage";
import AdminBasePage from "./AdminBasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";

export function Routes() {
    const {isAuthorized, user} = useSelector(
        ({auth}) => ({
            isAuthorized: auth.user != null && auth.user.roles[0] == 1,
            user: auth.user
        }),
        shallowEqual
    );

    return (
        <Switch>
            <BasePage />
            
            <Layout>
                <AdminBasePage/>
            </Layout>
        </Switch>
    );
}
