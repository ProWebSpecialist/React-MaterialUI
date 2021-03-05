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
      <ContentRoute path="/shop/services/:id?" component={ServicesPage} />
      <ContentRoute path="/shop/premade/:id?" component={PremadePage} />
      <ContentRoute path="/shop/addons/:id?" component={AddonsPage} />
      <ContentRoute path="/shop/all" component={ShopPage} />
    </Switch>
  </div>;
}
