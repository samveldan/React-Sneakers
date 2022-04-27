import { useContext } from "react";
import { AppContext } from "../components/app/App";
import BoughtBlock from "../components/bought-block/bought-block";

const Bought = ({title, data}) => {
    const {isLoading, emptyItems} = useContext(AppContext)

    return (
        <section className="sneakers">
        <div className="container">
            <div className="sneakers__header">
                <h1>{title}</h1>
            </div>
            {[...Array(4)].map(item => {
                return (
                    isLoading &&
                    <div className="bought-wrapper">
                        <h3>Заказ</h3>
                        <div className="bought-items">
                            {emptyItems(4)}
                        </div>
                    </div>
                )
            })}
            {data.length >= 0 ? data.map((item, index) => {
                return <BoughtBlock
                key={item.id}
                data={item}
                />
            }) :
            <div className="not-found">
                <div className="not-found__wrapper">
                    <img src="/images/not-found.png" alt="" />
                <p>Тут нет покупок</p>
                </div>
            </div>}
        </div>
    </section>
    );
}
 
export default Bought;