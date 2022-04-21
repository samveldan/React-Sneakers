import React from 'react';
import "./create-card.scss";

const CreateCard = ({data, setData, counter, setCounter}) => {
    const closePopup = e => {
        e.target.closest(".create-card").classList.remove("show");
    };

    const addItem = e => {
        const card = e.target.closest(".create-card"),
        question = card.querySelector("#question"),
        answer = card.querySelector("#answer");

        if(question.value == 0 || answer.value.length == 0) alert("Заполните все поля");
        else if(question.value.length > 0 && answer.value.length > 0) {
            setCounter(counter => counter += 1);

            setData(cards => {
                let newCards = [...cards, {id: counter, q : question.value, a : answer.value}];
                return newCards;
            })
        }
    };

    return (
        <div className="create-card">
            <div className="create-card__wrapper">
                <div className="create-card__title">Create Flashcard</div>
                <div className="create-card__inputs">
                    <div className="create-card__input">
                        <label htmlFor="question">Question</label>
                        <input type="text" id='question'/>
                    </div>
                    <div className="create-card__input">
                        <label htmlFor="answer">Answer</label>
                        <input type="text" id='answer'/>
                    </div>
                </div>
                <div className="create-card__btns">
                    <button data-create="save" onClick={addItem}>Save</button>
                    <button data-create="close" onClick={closePopup}>Close</button>
                </div>
            </div>
        </div>
    );
}
 
export default CreateCard;