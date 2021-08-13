import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className='header-wrapper'>
                <a className='logo'>SWAPI</a>
                <ul className="main-header-list">
                    <li className="header-list-item"><a href="">People</a></li>
                    <li className="header-list-item"><a href="">Planets</a></li>
                    <li className="header-list-item"><a href="">Starships</a></li>
                    <li className="header-list-item"><a href="">Vehicles</a></li>
                </ul>
            </header>
        );
    }
}