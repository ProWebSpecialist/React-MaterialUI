import React from "react";
import { FaShoppingBasket, FaRegWindowMaximize, FaAlignCenter, FaGhost } from 'react-icons/fa';

const addedItems = [
  {
    imgUrl: "https://i.imgur.com/8dhfp55.png",
    itemName: "Wiki Addon",
    price: 50
  },
  {
    imgUrl: "https://i.imgur.com/v5N92oe.png",
    itemName: "Ghost Addon",
    price: 50
  },
  {
    imgUrl: "https://i.imgur.com/KUB4fAW.png",
    itemName: "News Addon",
    price: 50
  },
  {
    imgUrl: "https://benjdzn.com/storage/219/bans.png",
    itemName: "LiteBans Web Addon",
    price: 50
  },
  {
    imgUrl: "https://benjdzn.com/storage/222/updates.png",
    itemName: "Updates Addon",
    price: 50
  }
];

export function AddonsPage() {
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

  return <div className="shop-container">
    <div className="newly-added mt-16">
      <div>
        <h1 className="text-dark font-bold title">Xenforo2 Addons</h1>
      </div>
      <div className="items">
        {
          addedItemsList
        }
      </div>
    </div>
  </div>;
}
