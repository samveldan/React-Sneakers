import React, { useState } from 'react';
import Header from '../header/header';
import Content from '../content/content';
import "./app.scss";

const App = () => {
    let [counter, setCounter] = useState(4);

    const buttons = [
        {id: 1, text: "Add Card", data: "add"},
        {id: 2, text: "Del Card", data: "del"},
    ]

    const [data, setData] = useState([
        {id: 1, q : "How old are you?", a : "20"},
        {id: 2, q : "Are you married?", a : "No"},
        {id: 3, q : "Do you know English?", a : "Yes"},
    ])

    return (
        <div className="flashcards">
            <Header buttons={buttons} setData={setData}/>
            <Content data={data} setData={setData} counter={counter} setCounter={setCounter}/>
        </div>
    );
}
 
export default App;
