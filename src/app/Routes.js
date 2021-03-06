import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {Layout} from "../_metronic/layout";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import {DashboardPage} from "./pages/DashboardPage";
import { BaseShopPage } from "./pages/ShopPage/BaseShopPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";

export function Routes() {
    const {isAuthorized} = useSelector(
        ({auth}) => ({
            isAuthorized: auth.user != null && auth.user.roles[0] === 1,
            user: auth.user
        }),
        shallowEqual
    );

    return (
        <Switch>
            {!isAuthorized ? (
                /*Render auth page when user at `/auth` and not authorized.*/
                <Route path="/auth">
                    <AuthPage />
                </Route>
            ) : (
                /*Otherwise redirect to root page (`/`)*/
                <Redirect from="/auth" to="/dashboard"/>
            )}

            {isAuthorized && <Route path="/dashboard">
                <Layout>
                    <UserDashboardPage />
                </Layout>
            </Route> }

            <Route path="/shop">
                <Layout>
                    <BaseShopPage />
                </Layout>
            </Route>

            <Route path="/error" component={ErrorsPage}/>
            <Route path="/logout" component={Logout}/>

            <Route path="/">
                <DashboardPage />
            </Route>
        </Switch>
    );
}
