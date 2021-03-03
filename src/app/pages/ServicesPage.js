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

  return <div className="shop-container">
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
  </div>;
}
