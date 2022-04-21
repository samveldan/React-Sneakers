import React from 'react';
import CreateCard from '../create-card/create-card';
import Cards from '../cards/cards';
import "./content.scss";

const Content = ({data, setData, counter, setCounter}) => {
    return (
        <section className="content">
            <div className="container">
                <div className="content__wrapper">
                    <CreateCard data={data} setData={setData} counter={counter} setCounter={setCounter}/>
                    <Cards data={data} setData={setData}/>
                </div>
            </div>
        </section>
    );
}
 
export default Content;