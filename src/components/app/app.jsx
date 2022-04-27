import React, {useState, useRef, useEffect, createContext} from 'react';
import axios from "axios"
import {Route, Routes} from "react-router-dom";
import Header from "../header/Header";
import Order from '../order/Order';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Bought from '../../pages/Bought';
import ContentLoader from "react-content-loader"
import "./app.scss";

export const AppContext = createContext({});
export const OrderContext = createContext({});

const App = (e) => {
    let orderRef = useRef();
    const [isLoading, setIsLoading] = useState(true);
    const [price, setPrice] = useState(parseInt(0));
    const [ordered, setOrdered] = useState(false);

    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [bought, setBought] = useState([]);
    const [important, setImportant] = useState([]);

    const emptyItems = (amount = 8) => {
        return (
            [...Array(amount)].map(() => {
                return (
                    <div className="item">
                          <div className="item__wrapper">
                            <ContentLoader 
                                speed={2}
                                width={150}
                                height={180}
                                viewBox="0 0 150 180"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect x="133" y="125" rx="0" ry="0" width="1" height="0" /> 
                                <rect x="0" y="0" rx="7" ry="7" width="150" height="91" /> 
                                <rect x="0" y="105" rx="0" ry="0" width="150" height="15" /> 
                                <rect x="-2" y="126" rx="0" ry="0" width="75" height="15" /> 
                                <rect x="0" y="156" rx="0" ry="0" width="80" height="24" /> 
                                <rect x="103" y="156" rx="0" ry="0" width="45" height="24" />
                            </ContentLoader>
                          </div>
                    </div>
                )
            }) 
        )
    };
    

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            let getData = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/sneakers");

            let getOrders = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/cart");
            let ordersData = getOrders.data;
            ordersData.forEach(b => {setPrice(p => p += parseInt(b.price.replace(" ", "")))})

            let getImportant = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/important");
            let getBought = await axios.get("https://6264015798095dcbf929fe3c.mockapi.io/bought");

            setData(getData.data);
            setOrders(ordersData);
            setImportant(getImportant.data);
            setBought(getBought.data);

            setIsLoading(false);
        }
        fetchData();
    }, []);

    const showOrders = e => {
        const order = orderRef.current;
        const cartBtn = e.target.closest(".header__cart button");
        const overlay = e.target.closest(".order__overlay");
        const backButton = document.querySelector(".order-info button");
        
        if(cartBtn) order.classList.add("active");
        else if(overlay || backButton) order.classList.remove("active");
    };

    return (
        <main onClick={showOrders}>
            <div className="container">
                <Header orderRef={orderRef} price={price}/>
            </div>
            <hr className="header__hr"/>
        <AppContext.Provider value={{data, setData, setPrice, orders, setOrders, important, setImportant, isLoading, emptyItems, ordered, setOrdered}}>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/favorites" element={<Favorites 
                    title="Мои Закладки"
                    data={important}/>}>
                </Route>
                <Route exact path="/bought" element={<Bought 
                    title="Мои Покупки"
                    data={bought}/>}>
                </Route>
            </Routes>
        </ AppContext.Provider>
        <OrderContext.Provider value={{price, setPrice, orders, orderRef, setOrders, setBought, ordered, setOrdered}}>
            <Order />
        </OrderContext.Provider>
        </main>
    );
}
 
export default App;
