import React from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./__mockup__/shopMockup";
import { ItemDetailPage } from "./ItemDetailPage";

export function ServicesPage() {
  let { id } = useParams();

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

  return <>
    <div className="custom-items mb-8">
      <div>
        <h1 className="text-dark font-bold title">Services</h1>
      </div>
        {
          id === undefined ? <div className="items">{customItemList}</div> : <ItemDetailPage id={id} category="services" />
        }
    </div>
  </>;
}
