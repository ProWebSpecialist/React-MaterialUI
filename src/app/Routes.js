import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {Layout, ContentRoute} from "../_metronic/layout";
import BasePage from "./BasePage";
import AdminBasePage from "./AdminBasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { ShopPage } from "./pages/ShopPage";
import {DashboardPage} from "./pages/DashboardPage";
import {ServicesPage} from "./pages/ServicesPage";
import {PremadePage} from "./pages/PremadePage.js";
import {AddonsPage} from "./pages/AddonsPage";

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
            {!isAuthorized ? (
                /*Render auth page when user at `/auth` and not authorized.*/
                <Route path="/auth/login">
                    <AuthPage />
                </Route>
            ) : (
                /*Otherwise redirect to root page (`/`)*/
                <Redirect from="/auth" to="/admin"/>
            )}

            <Route path="/error" component={ErrorsPage}/>
            <Route path="/logout" component={Logout}/>

            <Switch>
                <Route path="/services">
                    <Layout>
                        <ServicesPage />
                    </Layout>
                </Route>
                <Route path="/premade">
                    <Layout>
                        <PremadePage />
                    </Layout>
                </Route>
                <Route path="/addons">
                    <Layout>
                        <AddonsPage />
                    </Layout>
                </Route>
                <Route path="/shop">
                    <Layout>
                        <ShopPage />
                    </Layout>
                </Route>
                <Route path="/">
                    <DashboardPage />
                </Route>
            </Switch>

            {/* <ContentRoute path="/home" component={DashboardPage} /> 
            <Route>
                <AuthPage />
            </Route>
            <Layout>
                <Switch>
                    <ContentRoute path="/shop/services" component={ServicesPage} />
                    <ContentRoute path="/shop/premade" component={PremadePage} />
                    <ContentRoute path="/shop/addons" component={AddonsPage} />
                    <ContentRoute path="/shop" component={ShopPage} />
                </Switch>
            </Layout> */}


        </Switch>
    );
}
