import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./modules/Auth";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/home" />
        }
        <ContentRoute path="/home" component={DashboardPage} />
        <ContentRoute path="/auth/login" component={AuthPage} />
      </Switch>
    </Suspense>
  );
}
