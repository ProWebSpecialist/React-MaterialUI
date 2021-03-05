import React from "react";
import {FaTwitter, FaDiscord, FaSkype} from "react-icons/fa"; 
export function FooterCompact({
  today,
  footerClasses,
  footerContainerClasses,
}) {
  return (
    <>
      {/* begin::Footer */}
      <div
        className={`footer bg-white py-8 d-flex flex-lg-column  ${footerClasses}`}
        id="kt_footer"
      >
        {/* begin::Container */}
        <div
          className={`${footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
        >
          {/* begin::Copyright */}
          <div className="text-dark">
            {/* <a  
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark-75 text-hover-primary"
            >
              
            </a> */}
            <span className="text-muted font-weight-bold mr-2 ml-2">
              &copy;
            </span>
            {` `}
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark-75 text-hover-primary"
            >
               Copyright Benj 2020. All Rights Reserved.
            </a>
          </div>
          {/* end::Copyright */}
          {` `}
          {/* begin::Nav */}
          <div className="text-dark d-flex align-items-center justify-content-end social-medias">
            <div className="social-media-link">
              <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-dark-75 text-hover-primary"
              >
              <FaTwitter /> 
              </a>
            </div>
            <div className="social-media-link">
              <a
                href="https://discord.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-dark-75 text-hover-primary"
              >
              <FaDiscord /> 
              </a>
            </div>
            {/* <div className="social-media-link">
              <a
                href="https://skype.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-dark-75 text-hover-primary"
              >
              <FaSkype /> 
              </a>
            </div> */}
          </div>
          {/* end::Nav */}
        </div>
        {/* end::Container */}
      </div>
      {/* end::Footer */}
    </>
  );
}
