import React from 'react';
import './Header.css';
import Logo from '../assets/Tesla-Wordmark-Red.png';
import MenuImg from '../assets/menu.png';
import SpeedIcon from '../assets/Speed.png';
import RoadIcon from '../assets/Road icon.png';
import TestDriveIcon from '../assets/steering-wheel.png';
import GoButtomIcon from '../assets/go_bottom.png';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav>

                    <div className="logo">
                        <a>
                            <img src={Logo} alt="" />
                        </a>
                    </div>

                    <ul className="header__menu">
                        
                        <li><a href="" className="item1 menu__item active">Model S</a></li>
                        <li><a href="" className="item2 menu__item">Model X</a></li>
                        <li><a href="" className="item3 menu__item">Model 3</a></li>
                        <li><a href="" className="item4 menu__item">Roadster</a></li>
                        <li><a href="" className="item5 menu__item">Energy</a></li>
                    </ul>

                    <ul className="header__cart">
                        <li><a href="" className="menu__item">Магазин</a></li>
                        <li><a href="" className="menu__item">Войти</a></li>
                        <li><img src={MenuImg} alt="" /></li>
                    </ul>
                </nav>

                <div className="tesla__title">
                    <h1>Model S</h1>
                    <p>Добро пожаловать в будущее!</p>
                </div>

                <div className="tesla__info">

                    <div className="info__block">
                        <img className="info_block_img" src={SpeedIcon} alt="" />
                        <div className="info_block_text">
                            <div className="info_block_time">2,7<span>сек</span></div>
                            <div className="info_block_speed">0-100 км/час</div>
                        </div>
                    </div>

                    <div className="info__block">
                        <img className="info_block_img" src={RoadIcon} alt="" />
                        <div className="info_block_text">
                            <div className="info_block_time">632<span>км</span></div>
                            <div className="info_block_speed">запас хода</div>
                        </div>
                    </div>

                    <div className="test__drive">
                        <img src={TestDriveIcon} alt=""/>
                        <div>Тест драйв</div>
                    </div>

                    <div className="order">Заказать</div>
                </div>
                
                <a href="" className="go_bottom">
                    <img src={GoButtomIcon} alt="" />
                </a>

            </div>
        </div>
    )
}

export default Header
