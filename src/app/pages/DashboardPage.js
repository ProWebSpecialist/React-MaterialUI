import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
  Card
} from "react-bootstrap";
import {
  Button
} from "@material-ui/core";
import { FaShoppingBasket, FaSkype, FaSignInAlt, FaDiscord, FaChevronUp } from 'react-icons/fa';
import logo from "../../_metronic/_assets/img/logo.png";
import ScrollToTop from "react-scroll-to-top";

const items = [
  {
    imgUrl: "https://i.imgur.com/M12Cg2n.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/neGD2Hj.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/0uJd5zb.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/tyePGMB.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/M12Cg2n.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/neGD2Hj.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/0uJd5zb.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/tyePGMB.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/M12Cg2n.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/neGD2Hj.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/0uJd5zb.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  },
  {
    imgUrl: "https://i.imgur.com/tyePGMB.png",
    bigMessage: "SkyBounds",
    smallMessage: "Full Website"
  }
];

export function DashboardPage() {
  const {isAuthorized, user} = useSelector(
    ({auth}) => ({
        isAuthorized: auth.user != null && auth.user.roles[0] == 1,
        user: auth.user
    }),
    shallowEqual
  );

  const [count, setCount] = useState(6);

  const itemList = items.map((i, index) => {

    return index < count && <div className="item" key={index}>
            <img src={i.imgUrl} />
            <a href="https://skybounds.com/" className="hover-message text-center">
              <div className="big-message">{i.bigMessage}</div>
              <div className="light-blue-text small-message">{i.smallMessage}</div>
            </a>
          </div>;
  });

  return <div className="homepage-container">
    <ScrollToTop smooth className="scrollup" component={<FaChevronUp />} />
    <div id="bubLarge"></div>
    <div id="bubMid"></div>
    <div className="header-container mt-12 mx-16">
      <div className="button-container">
        <Button
          variant="contained"
          size="small"
          className="light-blue-bg font-bold px-8 py-3 text-sm tc-white br-20"
        >
          <FaShoppingBasket className="icon-addon mr-4" />
          Shop
        </Button>
      </div>
      <div className="button-container">
        {
          isAuthorized ? <a href="/">
          <Button
            variant="contained"
            size="small"
            className="btn-black font-bold px-8 py-3 text-sm tc-white br-20"
          >
            Dashboard
            <FaSignInAlt className="icon-addon ml-4" />
          </Button>
        </a> : <a href="/auth/login">
          <Button
            variant="contained"
            size="small"
            className="btn-black font-bold px-8 py-3 text-sm tc-white br-20"
          >
            Sign in
            <FaSignInAlt className="icon-addon ml-4" />
          </Button>
        </a>
        }
      </div>
    </div>
    <div className="main-content">
      <div className="logo-container text-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="content-header">
        <div className="button-group">
          <div className="button-container">
            <Button
              variant="contained"
              size="small"
              className="light-blue-bg font-bold px-8 py-3 text-sm tc-white br-20"
            >
              <FaSkype className="icon-addon mr-4" />
              Benj.designs
            </Button>
          </div>
          <div className="button-container">
            <Button
              variant="contained"
              size="small"
              className="btn-black font-bold px-8 py-3 text-sm tc-white br-20"
            >
              <FaDiscord className="icon-addon mr-4" />
              Benj#1049
            </Button>
          </div>
        </div>
        <div className="header-text text-center">
          <div>LETS <span className="light-blue-text">CREATE</span></div>
          <div>SOMETHING <span className="light-blue-text">AWESOME</span></div>
        </div>
      </div>
      <div className="items-container">
        {
          itemList
        }
      </div>
      <div className="loadmore text-center mb-8">
        <div className="button-container">
          <Button
            variant="contained"
            size="small"
            className="btn-black font-bold px-8 py-3 text-sm tc-white br-20"
            onClick={() => setCount(count + 6)}
          >
            Load More...
          </Button>
        </div>
      </div>
    </div>
  </div>;
}
