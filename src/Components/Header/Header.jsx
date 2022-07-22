import React from "react";
import './Header.scss'
import logo from '../Assets/images/pokemon.png'

const Header = () => {

    return(
        <header className="header-page">
            <div className="container header-page__container">
                <div className="header-page__logo">
                    <div className="logo">
                        <img className="logo_img" src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="header-page__items">
                        
                </div>
            </div>
        </header>
    )
}

export default Header