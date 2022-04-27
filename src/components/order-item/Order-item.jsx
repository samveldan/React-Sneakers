import { OrderContext } from "../app/App";
import { useContext } from "react";
import axios from "axios";
import "./order-item.scss";

const OrderItem = ({title, item, price, src, current}) => {
    const {setPrice, setOrders} = useContext(OrderContext)

    const removeFromOrder = e => {
        setOrders(items => {
            let newItems = items.filter(item => {
                if(item.current != current) return item
            });

            return newItems;
        })
        setPrice(p => p -= parseInt(price.replace(" ", "")))
        axios.get(`https://6264015798095dcbf929fe3c.mockapi.io/cart/?current=${item.current}`).then(d => d.data).then((d) => {
            axios.delete(`https://6264015798095dcbf929fe3c.mockapi.io/cart/${d[0].id}`);
        })
    };

    return (
        <div className="order__item" data-id={current}>
            <div className="order__item-img"><img src={src} alt="" /></div>
            <div className="order__item-info">
                <h3>{title}</h3>
                <span>{price} руб.</span>
            </div>
            <button onClick={removeFromOrder} className="order__item-close"><img src="/images/close-item.svg" alt="" /></button>
        </div>
    );
}
 
export default OrderItem;