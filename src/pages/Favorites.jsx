import { useContext } from "react";
import { AppContext } from "../components/app/App";
import Item from "../components/item/Item";

const Favorites = ({title, data}) => {
    const {isLoading, emptyItems} = useContext(AppContext)

    return (
        <section className="sneakers">
        <div className="container">
            <div className="sneakers__header">
                <h1>{title}</h1>
            </div>
            <div className="sneakers__wrapper">
                {isLoading ? emptyItems() : data.length > 0 ? data.map(item => {
                    return <Item
                    key={item.current}
                    title={item.title}
                    price={item.price}
                    src={item.src}
                    item={item}
                    />
                }) :
                <div className="not-found">
                    <div className="not-found__wrapper">
                        <img src="/images/not-found.png" alt="" />
                    <p>Тут нет закладок</p>
                    </div>
                </div>}
                
            </div>
        </div>
    </section>
    );
}
 
export default Favorites;