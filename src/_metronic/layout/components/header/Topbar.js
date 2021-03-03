import React, { useMemo } from "react";
import objectPath from "object-path";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { SearchDropdown } from "../extras/dropdowns/search/SearchDropdown";
import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";
import { QuickActionsDropdown } from "../extras/dropdowns/QuickActionsDropdown";
import { MyCartDropdown } from "../extras/dropdowns/MyCartDropdown";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { QuickUserToggler } from "../extras/QuiclUserToggler";
import { shallowEqual, useSelector } from "react-redux";

export function Topbar() {

  const {isAuthorized} = useSelector(
    ({auth}) => ({
        isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      viewCartDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="topbar">
      {/* {layoutProps.viewSearchDisplay && <SearchDropdown />} */}

      <div className="topbar-item">
        <div
          className="d-flex align-items-center w-md-auto mr-4 login-btn"
        >
          {!isAuthorized ? (
                /*Render auth page when user at `/auth` and not authorized.*/
                <button
                type="button"
                className="btn btn-transparent-white font-weight-bold"
              >
                LOGIN
              </button>    
          ) : (
                /*Otherwise redirect to root page (`/`)*/
              <Link
              to="/logout"
              className="btn btn-transparent-white font-weight-bold"
            >
              LOG OUT
            </Link>
          )}          
        </div>
      </div>

      {/* {layoutProps.viewUserDisplay && <QuickUserToggler />} */}
    </div>
  );
}
