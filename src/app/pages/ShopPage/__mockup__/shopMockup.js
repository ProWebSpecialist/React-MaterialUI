import React from "react";
import { FaShoppingBasket, FaRegWindowMaximize, FaAlignCenter, FaGhost } from 'react-icons/fa';
import preview1 from "../../../../_metronic/_assets/img/preview1.png";
import preview2 from "../../../../_metronic/_assets/img/preview2.png";
import preview3 from "../../../../_metronic/_assets/img/preview3.png";
import preview4 from "../../../../_metronic/_assets/img/preview4.png";
import preview5 from "../../../../_metronic/_assets/img/preview5.png";


export const items = [
  {
    id: 1,
    faIcon: <FaShoppingBasket className="w-100 h-100" />,
    itemName: 'Store Theme',
    price: 100,
    category: "services",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [],
    eta: "Around 1 week"
  },
  {
    id: 2,
    faIcon: <FaRegWindowMaximize className="w-100 h-100" />,
    itemName: 'Xenforo Theme',
    price: 150,
    category: "services",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    eta: "Around 2 week"
  },
  {
    id: 3,
    faIcon: <FaAlignCenter className="w-100 h-100" />,
    itemName: 'Full Website',
    price: 200,
    category: "services",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      }
    ],
    eta: "Around 2 week+"
  },
  /*{
    id: 4,
    faIcon: <FaGhost className="w-100 h-100" />,
    itemName: 'Ghost Theme',
    price: 100,
    category: "services",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      }
    ],
    eta: "Around 1 week"
  },*/
  {
    id: 5,
    imgUrl: "https://i.imgur.com/Nktz5tE.png",
    itemName: "Cube Buycraft",
    price: 50,
    category: "premade",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 6,
    imgUrl: "https://i.imgur.com/8dhfp55.png",
    itemName: "Wiki Addon",
    price: 50,
    category: "addons",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 7,
    imgUrl: "https://i.imgur.com/v5N92oe.png",
    itemName: "Ghost Addon",
    price: 50,
    category: "addons",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 8,
    imgUrl: "https://i.imgur.com/KUB4fAW.png",
    itemName: "News Addon",
    price: 50,
    category: "addons",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 9,
    imgUrl: "https://benjdzn.com/storage/219/bans.png",
    itemName: "LiteBans Web Addon",
    price: 50,
    category: "addons",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 10,
    imgUrl: "https://benjdzn.com/storage/222/updates.png",
    itemName: "Updates Addon",
    price: 50,
    category: "addons",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 11,
    imgUrl: "https://benjdzn.com/storage/75/forum-final.png",
    itemName: "FluidUI Package",
    price: 50,
    category: "premade",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  },
  {
    id: 12,
    imgUrl: "https://benjdzn.com/storage/83/strore-final.png",
    itemName: "FluidUI Buycraft",
    price: 50,
    category: "premade",
    description: "Bring your Ghost Platform to the next level with a custom tailored website to fit your needs. If you plan on having a presence on the internet a high quality website is a must. Give your community the seamless, modern and high quality design the deserve.",
    included: [
      {
        id: 1,
        feature: "Mobile Friendly"
      },
      {
        id: 2,
        feature: "Portal / Landing Page"
      },
      {
        id: 3,
        feature: "Xenforo1/2 Theme"
      },
      {
        id: 4,
        feature: "Buycraft Theme"
      },
      {
        id: 5,
        feature: "Custom Vote & Staff Page"
      },
      {
        id: 6,
        feature: "Vote & Staff Page Addon (Included free of charges"
      }
    ],
    deliveryTime: "Instant",
    carouselItems: [
      {
        name: "Random Name #1",
        imageUrl: preview1
      },
      {
        name: "Random Name #2",
        imageUrl: preview2
      },
      {
        name: "Random Name #3",
        imageUrl: preview3
      },
      {
        name: "Random Name #4",
        imageUrl: preview4
      },
      {
        name: "Random Name #5",
        imageUrl: preview5
      }
    ]
  }
];