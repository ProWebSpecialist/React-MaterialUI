import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ContentRoute } from "../../../_metronic/layout";
import { ShopPage } from "./ShopPage";
import {ServicesPage} from "./ServicesPage";
import {PremadePage} from "./PremadePage.js";
import {AddonsPage} from "./AddonsPage";

export function BaseShopPage() {
  return <div className="shop-container">
    <Switch>
      <Redirect
        exact={true}
        from="/shop"
        to="/shop/all"
      />
      <ContentRoute path="/shop/services" component={ServicesPage} />
      <ContentRoute path="/shop/premade" component={PremadePage} />
      <ContentRoute path="/shop/addons" component={AddonsPage} />
      <ContentRoute path="/shop/all" component={ShopPage} />
    </Switch>
  </div>;
}
