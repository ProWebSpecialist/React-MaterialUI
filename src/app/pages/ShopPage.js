import React from "react";
import { FaShoppingBasket, FaRegWindowMaximize, FaAlignCenter, FaGhost } from 'react-icons/fa';

const customItems = [
  {
    faIcon: <FaShoppingBasket className="w-100 h-100" />,
    itemName: 'Store Theme',
    price: 100
  },
  {
    faIcon: <FaRegWindowMaximize className="w-100 h-100" />,
    itemName: 'Xenforo Theme',
    price: 150
  },
  {
    faIcon: <FaAlignCenter className="w-100 h-100" />,
    itemName: 'Full Website',
    price: 200
  },
  {
    faIcon: <FaGhost className="w-100 h-100" />,
    itemName: 'Ghost Theme',
    price: 100
  }
];

const addedItems = [
  {
    imgUrl: "https://i.imgur.com/Nktz5tE.png",
    itemName: "Cube Buycraft",
    price: 50
  },
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
  },
  {
    imgUrl: "https://benjdzn.com/storage/75/forum-final.png",
    itemName: "FluidUI Package",
    price: 50
  },
  {
    imgUrl: "https://benjdzn.com/storage/83/strore-final.png",
    itemName: "FluidUI Buycraft",
    price: 50
  }
];

export function ShopPage() {
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
  </div>;
}
