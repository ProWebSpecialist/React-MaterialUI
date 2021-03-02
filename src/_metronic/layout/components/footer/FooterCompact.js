import React from "react";

export function FooterCompact({
  today,
  footerClasses,
  footerContainerClasses,
}) {
  return (
    <>
      {/* begin::Footer */}
      <div
        className={`footer bg-white py-4 d-flex flex-lg-column  ${footerClasses}`}
        id="kt_footer"
      >
        {/* begin::Container */}
        <div
          className={`${footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-center`}
        >
          {/* begin::Copyright */}
          <div className="text-dark order-2 order-md-1">
            <a  
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark-75 text-hover-primary"
            >
              OnexusForums
            </a>
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
              All Rights Reserved
            </a>
          </div>
          {/* end::Copyright */}
          {` `}
          {/* begin::Nav */}
          
          {/* end::Nav */}
        </div>
        {/* end::Container */}
      </div>
      {/* end::Footer */}
    </>
  );
}
