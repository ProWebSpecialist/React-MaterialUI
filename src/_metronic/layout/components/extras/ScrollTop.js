import React from "react";
import SVG from "react-inlinesvg";
import { FaChevronUp } from 'react-icons/fa';
import {toAbsoluteUrl} from "../../../_helpers";

export function ScrollTop() {
  return (
      <div id="kt_scrolltop" className="scrolltop">
        <span className="svg-icon">
          <FaChevronUp />
        </span>{" "}
      </div>
  );
}
