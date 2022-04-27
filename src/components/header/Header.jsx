import {Route, Routes, Link} from "react-router-dom";
import "./header.scss";

const Header = ({price}) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to={"/"} className="logo-link">
                    <div className="header__logo">
                        <img src="images/logo.jpg" alt="" />
                        <div className="header__logo-info">
                            <h3>react sneakers</h3>
                            <span>Магазин лучших кроссовок</span>
                        </div>
                    </div>
                </Link>
                <div className="header__info">
                    <div className="header__cart header__info-item">
                        <button>
                            <img src="images/cart.svg" alt="" />
                        </button>
                        <span>{price} руб.</span>
                    </div>
                    <Link to={"/favorites"}>
                        <div className="header__heart header__info-item">
                            <button>
                                <img src="images/heart.svg" alt="" />
                            </button>
                        </div>
                    </Link>
                    <Link to={"/bought"}>
                        <div className="header__person header__info-item">
                            <button>
                                <img src="images/person.svg" alt="" />
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
 
export default Header;