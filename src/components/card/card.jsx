import React from 'react';
import "./card.scss";

const Card = ({itemInfo, setData}) => {
    const showAnswer = e => {
        const card = e.target.closest(".cards__card"),
        removeBtn = card.querySelector(".cards__card-remove"),
        answer = card.querySelector(".cards__card-answer");

        answer.classList.toggle("show");
    };

    const deleteItem = e => {
        setData(cards => {
            let newCards = cards.filter(card => {
                return card.id != itemInfo.id;
            });

            return newCards;
        });
    };

    return (
        <div className="cards__card" onClick={showAnswer} data-id={itemInfo.id}>
            <div className="cards__card-header">
                <button className="cards__card-remove" onClick={deleteItem}>-</button>
            </div>
            <div className="cards__card-content">
                <div className="cards__card-question">{itemInfo.q}</div>
                <div className="cards__card-answer">{itemInfo.a}</div>
            </div>
        </div>
    )
}
 
export default Card;