import React from "react";
import { customItems } from "./__mockup__/shopMockup";

export function ServicesPage() {
  const customItemList = customItems.map(i => {
    return <div className="item">
            <div className="item-custom-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-custom">
                {i.faIcon}
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{i.itemName}</h6>
              <div className="item-sub-desc">Starting At $<span className="light-green-text">{i.price}</span></div>
            </div>
          </div>;
  });

  return <>
    <div className="custom-items mb-8">
      <div className="mb-8">
        <h1 className="text-dark font-bold title">Services</h1>
      </div>
      <div className="items">
        {
          customItemList
        }
      </div>
    </div>
  </>;
}
