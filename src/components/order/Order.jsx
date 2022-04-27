import {useContext, useState} from "react";
import { OrderContext } from "../app/App";
import axios from "axios";
import OrderItem from "../order-item/Order-item";
import OrderInfoBlock from "../oder-info-block/order-info-block";
import "./order.scss";

const Order = () => {
    const {orders, price, setPrice, orderRef, bought, setOrders, ordered, setOrdered} = useContext(OrderContext);
    const [ordersLoading, setOrdersLoading] = useState(false);
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let [getBought, setGetBought] = useState(axios.get("https://6264015798095dcbf929fe3c.mockapi.io/bought").then(d => d.data));

    const removeOrderes = async () => {
        let getOrders = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/cart");

        for (let i = 0; i < getOrders.data.length; i++) {
            axios.delete(`https://6264015798095dcbf929fe3c.mockapi.io/cart/${getOrders.data[i].id}`);
            await sleep(1000);
        }
    };

    const postToBought = async () => {
        await axios.post("https://6264015798095dcbf929fe3c.mockapi.io/bought", {orders});
        await setGetBought(await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/bought").then(d => d.data));
    };

    const buyItems = async () => {
        setOrdersLoading(true);

        await postToBought();
        await removeOrderes();
        
        setOrdersLoading(false);

        setOrders([]);
        setPrice(0);
        setOrdered(true);
    }

    return (
        <>
        <section className="order" ref={orderRef}>
            <div className="order__overlay"></div>
            <div className="order__items">
                <h3 className="h3-styles order__items-title">Корзина</h3>
                <div className={ordersLoading ? "order__items-wrapper loading" : "order__items-wrapper"}>
                {ordersLoading && <img src="images/Basketball.gif" className="loading-gif"/>}
                    {orders.length > 0 && 
                            orders.map(item => {
                                return <OrderItem
                                item={item}
                                key={item.current}
                                current={item.current}
                                title={item.title}
                                price={item.price}
                                src={item.src}
                                />
                            })}
                    {ordered ? 
                     <OrderInfoBlock 
                        orderClass={"order-done"}
                        orderImg={"images/order-done.png"}
                        title={"Заказ оформлен"}
                        titleInfo={`Ваш заказ #${getBought[getBought.length - 1].id} скоро будет передан курьерской доставке`}
                        /> : orders.length == 0 && 
                        <OrderInfoBlock 
                           orderClass={"empty-cart"}
                           orderImg={"images/empty-cart.png"}
                           title={"Корзина пустая"}
                           titleInfo={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                           />}
                </div>
                {orders.length > 0 && 
                            <div className="order__info">
                                <div className="order__buy">
                                    <div className="order__buy-block">
                                        <span>Итого:</span>
                                        <div></div>
                                        <div className="order__buy-total">{price} руб.</div>
                                    </div>
                                    <div className="order__buy-block">
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <div className="order__buy-total">{price * 5/100} руб.</div>
                                    </div>
                                </div>
                                <button className={ordersLoading ? "order__btn disabled" : "order__btn"} onClick={buyItems} disabled={ordersLoading ? true : false}>
                                        <span>Оформить заказ</span>
                                        <img src="images/buy-arrow.svg" alt="" />
                                </button>
                            </div>}
                        </div>
                    </section>
        </>
    );
}
 
export default Order;