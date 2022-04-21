import React from 'react';
import "./header-btns.scss"

const HeaderBtns = ({buttons, setData}) => {
    const showCreate = e => {
        const app = e.target.closest(".flashcards"),
        createPopup = app.querySelector(".create-card");

        createPopup.classList.toggle("show");
    };

    const delCards = e => {
        setData(cards => {
            return [];
        })
    };

    return (
        <div className="header__btns">
            {buttons.map(btn => {
                if(btn.data == "add") {
                    return <button className='header__btn' key={btn.id} data-header={btn.data} onClick={showCreate}>{btn.text}</button>
                }
                if(btn.data == "del") {
                    return <button className='header__btn' key={btn.id} data-header={btn.data} onClick={delCards}>{btn.text}</button>
                }
                return <button className='header__btn' key={btn.id} data-header={btn.data}>{btn.text}</button>
            })}
        </div>
    );
}
 
export default HeaderBtns;