import React, { useContext, useState } from 'react';
import { AppContext } from '../app/App';
import axios from 'axios';
import "./item.scss";

const Item = ({title, price, src, item}) => {
    const {setPrice, orders, setOrders, important, setImportant, setOrdered} = useContext(AppContext)

    let heartClass = "/images/no-hover-heart.svg";

    let hasItem = orders.some(i => {
        if(i.current == item.current) return true;
    });
    
    let hasImportant = false;
    important.forEach(i => {
        if(i.current == item.current) {
            hasImportant = true;
            heartClass = "/images/hover-heart.svg";
        }
    })

    let imgSrc = "/images/no-active-add.svg";

    const addFavorite = e => {
        if(!hasImportant) {
            setImportant(items => [...items, item]);
            axios.post("https://6264015798095dcbf929fe3c.mockapi.io/important", item);
        }
        else {
            setImportant(items => {
                let newItems = items.filter(i => {
                    if(i.current != item.current) return i;
                })

                return newItems;
            })
            axios.get(`https://6264015798095dcbf929fe3c.mockapi.io/important/?current=${item.current}`).then(d => d.data).then((d) => {
                axios.delete(`https://6264015798095dcbf929fe3c.mockapi.io/important/${d[0].id}`);
            })
        }
    };

    orders.forEach(i => {
        if(i.current == item.current) imgSrc = "/images/active-add.svg";
    });

    const buyItem = e => {
        setOrdered(false);
        
        if(!hasItem) {
            imgSrc = "/images/active-add.svg";
            setOrders(items => [...items, item]);
            
            setPrice(p => p += parseInt(item.price.replace(" ", "")));
            axios.post("https://6264015798095dcbf929fe3c.mockapi.io/cart", item);
        }
        else {
            imgSrc = "/images/no-active-add.svg";
            setPrice(p => p -= parseInt(item.price.replace(" ", "")));

            setOrders(items => {
                let filtered = items.filter(i => i.current != item.current);
                return filtered;
            });

            axios.get(`https://6264015798095dcbf929fe3c.mockapi.io/cart/?current=${item.current}`).then(d => d.data).then((d) => {
                axios.delete(`https://6264015798095dcbf929fe3c.mockapi.io/cart/${d[0].id}`);
            })
        }
    };

    return (
        <div className="item" data-id={item.current}>
            <div className="item__wrapper">
                <button className="item__favorite" onClick={addFavorite}><img src={heartClass} alt="" /></button>
                <div className="item__img"><img src={src} alt="" /></div>
                <h4 className="item__title">
                    {title}
                </h4>
                <div className="item__bottom">
                    <div className="item__price">
                        <span>цена</span>
                        <span>{price} руб.</span>
                    </div>
                    <button onClick={buyItem} className="item__btn"><img src={imgSrc} alt="" /></button>
                </div>
            </div>
        </div>
    );
}
 
export default Item;