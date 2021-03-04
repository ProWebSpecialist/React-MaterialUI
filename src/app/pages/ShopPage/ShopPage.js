import React from "react";
import {customItems, addedItems} from "./__mockup__/shopMockup";

export function ShopPage() {
  const customItemList = customItems.map(i => {
    return <a className="item">
            <div className="item-custom-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-custom">
                {i.faIcon}
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{i.itemName}</h6>
              <div className="item-sub-desc">Starting At $<span className="light-green-text">{i.price}</span></div>
            </div>
          </a>;
  });

  const addedItemsList = addedItems.map(a => {
    return <a href="`/shop/addon/${}`" className="item">
            <div className="item-added-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-added">
                <img src={a.imgUrl} />
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{a.itemName}</h6>
              <div className="item-sub-desc">Price$<span className="light-green-text">{a.price}</span></div>
            </div>
          </a>;
  });

  return <>
    <div className="custom-items mb-8">
      <div className="mb-8">
        <h1 className="text-dark font-bold title">Custom Development</h1>
      </div>
      <div className="items">
        {
          customItemList
        }
      </div>
    </div>
    <div className="newly-added mt-16">
      <div>
        <h1 className="text-dark font-bold title">Newly Added</h1>
      </div>
      <div className="items">
        {
          addedItemsList
        }
      </div>
    </div>
  </>;
}
