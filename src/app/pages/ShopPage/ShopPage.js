import React from "react";
import { Link } from "react-router-dom";
import { items} from "./__mockup__/shopMockup";

export function ShopPage() {
  const customItemList = items.map(i => {
    return i.category === "services" && <Link to={`/shop/${i.category}/${i.id}`} className="item" key={i.id}>
            <div className="item-custom-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-custom">
                {i.faIcon}
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{i.itemName}</h6>
              <div className="item-sub-desc">Starting At $<span className="light-green-text">{i.price}</span></div>
            </div>
          </Link>;
  });

  const addedItemsList = items.map(i => {
    return (i.category === "addons" || i.category === "premade") && <Link to={`/shop/${i.category}/${i.id}`} className="item" key={i.id}>
            <div className="item-added-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-added">
                <img src={i.imgUrl} alt="item imageURL" />
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{i.itemName}</h6>
              <div className="item-sub-desc">Price$<span className="light-green-text">{i.price}</span></div>
            </div>
          </Link>;
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
