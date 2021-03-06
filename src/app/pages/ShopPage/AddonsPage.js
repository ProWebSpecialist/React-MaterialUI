import React from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./__mockup__/shopMockup";
import { ItemDetailPage } from "./ItemDetailPage";

export function AddonsPage() {
  let { id } = useParams();

  const addedItemsList = items.map(a => {
    return a.category === "addons" && <Link to={`/shop/${a.category}/${a.id}`} className="item" key={a.id}>
            <div className="item-added-wrapper text-center d-flex justify-content-center align-items-center">
              <div className="item-added">
                <img src={a.imgUrl} alt="item imageUrl" />
              </div>
            </div>
            <div className="item-footer text-center">
              <h6 className="text-dark font-bold mt-6">{a.itemName}</h6>
              <div className="item-sub-desc">Price$<span className="light-green-text">{a.price}</span></div>
            </div>
          </Link>;
  });

  return <>
    <div className="newly-added mt-16">
      <div>
        <h1 className="text-dark font-bold title">Xenforo2 Addons</h1>
      </div>
      {
        id === undefined ? <div className="items">{addedItemsList}</div> : <ItemDetailPage id={id} category="addons" />
      }
    </div>
  </>;
}
