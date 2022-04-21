import React from 'react';
import Card from '../card/card';
import "./cards.scss";

const Cards = ({data, setData}) => {
    return (
        <div className="cards">
            <div className="cards__wrapper">
                {data.map(item => {
                    return <Card itemInfo={item} key={item.id} setData={setData}/>
                })}
            </div>
        </div>
    );
}
 
export default Cards;