import { useContext } from "react";
import { AppContext } from "../app/App";
import BoughtItem from "../bought-item/bought-item";
import "./bought-block.scss";

const BoughtBlock = ({data}) => {

    return (
        <div className="bought-wrapper" key={data.id} data-id={data.id}>
            <h3>Заказ #{data.id}</h3>
            <div className="bought-items">
                {data.orders.map(item => {
                    return <BoughtItem 
                    key={item.current}
                    title={item.title}
                    price={item.price}
                    item={item}
                    src={item.src}
                />
                })}
            </div>
        </div>
    );
}
 
export default BoughtBlock;