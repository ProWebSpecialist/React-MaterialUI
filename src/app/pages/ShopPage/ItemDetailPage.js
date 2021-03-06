import React from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { items } from "./__mockup__/shopMockup";
import Carousel from 'react-material-ui-carousel'

export function ItemDetailPage(props) {
    let {id, category} = props;
    let item = items.filter(c => c.id === id && c.category === category);
    item = item[0];
    let carouselItem = item.carouselItems || [];
    
    return <div className="item-detail">
        <h3 className="title my-4">{item.itemName}</h3>
        <div className="detail-content d-flex justify-content-between">
            <div className="overview card">
                <div className="card-header text-dark font-bold px-12 py-6">
                    Overview
                </div>
                <div className="card-body d-flex justify-content-between px-12 py-6">
                    <div>Starting Price</div>
                    <div className="light-green-text font-bold">${item.price}</div>
                </div>
                <div className="card-footer d-flex justify-content-between px-12 py-6">
                    <div>
                        {
                            category === "services" ? "ETA" : "Delivery Time"
                        }
                    </div>
                    <div className="text-dark font-bold">{category === "services" ? item.eta : item.deliveryTime}</div>
                </div>
            </div>
            <div className="description card">
                <div className="card-header text-dark font-bold px-12 py-6">
                    Product Description
                </div>
                <div className="card-body px-12 py-6">
                    {
                        category === "premade" && <div className="exclamation d-flex justify-content-start align-items-center py-6 px-8 mb-6">
                            <div className="addon mr-4">
                                <FaExclamationCircle /> 
                            </div>
                            <div>
                                Branding at the bottom of the theme is <strong className="text-dark">required.</strong> Addtionally using the product on any other website then the one you list, will result in your account and support to product being <strong className="text-dark">disabled</strong>.
                            </div>
                        </div>
                    }
                    <div className="carousel-container">
                        {
                            carouselItem.length !== 0 &&<Carousel navButtonsAlwaysInvisible = {true}>
                                {
                                    carouselItem.map( (item, i) => <div className="card">
                                        <img src={item.imageUrl} alt="preview1" />
                                    </div> )
                                }
                            </Carousel>
                        }
                    </div>
                    {item.description}

                    <div className="included-container">
                        <div className="text-dark font-bold my-6">
                            {
                                item.included.length !== 0 && "Whats Included"
                            }
                        </div>
                            {
                                item.included.length !== 0 && item.included.map(i => {
                                    return <div className="include px-4 py-6 d-flex justify-content-start mb-4" key={i.id}>
                                                <div className="mr-2">
                                                    <BiChevronsRight />
                                                </div>
                                                <div>
                                                    {i.feature}
                                                </div>
                                            </div>;
                                })
                            }                        
                    </div>
                </div>
            </div>
        </div>
        {
            category !== "services" && <div className="terms py-2 text-right">
                By completing your purchase you agree to the <span className="light-blue-text"><Link to="/shop/termspolicy">Terms of Service</Link></span>.
            </div>
        }
        <div className={`order-btn text-right ${category === "services" && "mt-4"}`}>
            <Link to={category === "services" && `/shop/order/${id}`}>
                <button
                    type="button"
                    className="btn btn-transparent-white font-weight-bold px-12 py-4"
                >
                    {
                        category === "services" && "Order"
                    }
                    {
                        (category === "premade" || category === "addons") && "Purchase"
                    }
                </button>
            </Link>
        </div>
    </div>;
}