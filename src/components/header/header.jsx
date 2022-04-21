import React from 'react';
import HeaderBtns from '../header-btns/header-btns';
import "./header.scss";

const Header = ({buttons, setData}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <h2 className="header__title">Flashcards</h2>
                    <HeaderBtns buttons={buttons} setData={setData}/>
                </div>
            </div>
        </header>
    );
}
 
export default Header;