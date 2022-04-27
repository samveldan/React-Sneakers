import React, { useContext, useState } from 'react';
import "./bought-item.scss";

const BoughtItem = ({title, price, src, item}) => {
    return (
            <div className="item" data-id={item.current}>
                <div className="item__wrapper">
                    <div className="item__img"><img src={src} alt="" /></div>
                    <h4 className="item__title">
                        {title}
                    </h4>
                    <div className="item__bottom">
                        <div className="item__price">
                            <span>цена</span>
                            <span>{price} руб.</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default BoughtItem;