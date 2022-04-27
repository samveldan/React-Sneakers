import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../components/app/App";
import BoughtBlock from "../components/bought-block/bought-block";

const Bought = ({title, data}) => {
    const {isLoading, emptyItems} = useContext(AppContext)
    let [getBought, setGetBought] = useState();

    useEffect(() => {
        async function fetchData() {
            let getData = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/bought");
            setGetBought(getData.data);
            console.log(getData.data)
        }

        fetchData();
    }, [])

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
            {getBought && getBought.length > 0 ? getBought.map((item, index) => {
                return <BoughtBlock
                key={item.id}
                data={item}
                />
            }) :
            <div className="not-found">
                <div className="not-found__wrapper">
                    <img src="images/not-found.png" alt="" />
                <p>Тут нет покупок</p>
                </div>
            </div>}
        </div>
    </section>
    );
}
 
export default Bought;