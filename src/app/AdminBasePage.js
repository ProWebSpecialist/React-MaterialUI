import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { DashboardPage } from "./pages/Admin/DashboardPage";
import { ShopPage } from "./pages/ShopPage";

export default function AdminBasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <ContentRoute path="/admin" component={DashboardPage} />
        <ContentRoute path="/shop" component={ShopPage} />
      </Switch>
    </Suspense>
  );
}
