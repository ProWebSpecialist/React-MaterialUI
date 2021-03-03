/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";

export function AuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Content*/}
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            {/*begin::Content header*/}
            <div className="position-absolute top-0 left-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                Don't have an account yet?
              </span>
              <Link
                to="/auth/registration"
                className="font-weight-bold ml-2"
                id="kt_login_signup"
              >
                Sign Up!
              </Link>
            </div>
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}
          </div>
          {/*end::Content*/}
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-login.png")})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between ">
              {/* start:: Aside content */}
              <div className="flex-column-fluid d-flex flex-column justify-content-center text-center">
                <Link to="/" className="flex-column-auto mt-5 pb-lg-0 pb-10 text-center">
                  <img
                    alt="Logo"
                    className="max-h-70px"
                    src={toAbsoluteUrl("/media/logos/logo.png")}
                  />
                </Link>
                <p className="font-weight-lighter text-white opacity-80 login-description">
                  Lets create something awesome
                </p>
              </div>
              {/* end:: Aside content */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
