import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className='header-wrapper'>
                <Link to = '/' className='logo'>SWAPI</Link>
                <ul className="main-header-list">
                    <Link to = '/people/' className="header-list-item">People</Link>
                    <Link to = '/planets/' className="header-list-item">Planets</Link>
                    <Link to = '/starships/'className="header-list-item">Starships</Link>
                </ul>
            </header>
        );
    }
}