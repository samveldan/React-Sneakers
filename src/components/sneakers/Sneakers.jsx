import { useState, useContext } from "react";
import Item from "../item/Item";
import { AppContext } from "../app/App";
import "./sneakers.scss";

const Sneakers = ({title}) => {
    const {data, isLoading, emptyItems} = useContext(AppContext)

    const [value, setValue] = useState("");
    const handleValue = e => setValue(e.target.value);
    const clearInput = e => setValue("");

    let filteredData = data.filter(items => (items.title).toLowerCase().includes(value.toLowerCase()));

    const renderItems = () => {
        return (
            filteredData.map(item => {
                return <Item
                    key={item.current}
                    title={item.title}
                    price={item.price}
                    src={item.src}
                    item={item}
                />
            }) 
        )
    }

    return (
        <section className="sneakers">
            <div className="container">
                <div className="sneakers__header">
                    <h1>{value.length > 0 ? `Поиск по запросу: "${value}"` : title}</h1>
                    <div className="sneakers__input-remove">
                        <input value={value} onChange={handleValue} style={{"backgroundImage" : 'url("/images/search.svg")'}} type="text" placeholder="Поиск"/>
                        {value.length > 0 ? <button onClick={clearInput} className="input-remove"><img src="/images/close-item.svg" alt=""/></button> : null}
                    </div>
                </div>
                <div className="sneakers__wrapper">
                    {isLoading ? emptyItems() : renderItems()}
                    {value && filteredData.length == 0 ? <div className="not-found">
                        <div className="not-found__wrapper">
                            <img src="/images/not-found.png" alt="" />
                            <p>Таких кроссовок нет</p>
                        </div>
                    </div> : null}
                </div>
            </div>
        </section>
    );
}
 
export default Sneakers;