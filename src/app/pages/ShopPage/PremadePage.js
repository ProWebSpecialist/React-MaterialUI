import React from "react";
import { addedItems } from "./__mockup__/shopMockup";

export function PremadePage() {
  const addedItemsList = addedItems.map(a => {
    return <div className="item">
            <div className="item-added-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-added">
                <img src={a.imgUrl} />
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{a.itemName}</h6>
              <div className="item-sub-desc">Price$<span className="light-green-text">{a.price}</span></div>
            </div>
          </div>;
  });

  return <>
    <div className="newly-added mt-16">
      <div>
        <h1 className="text-dark font-bold title">Premade Themes</h1>
      </div>
      <div className="items">
        {
          addedItemsList
        }
      </div>
    </div>
  </>;
}
