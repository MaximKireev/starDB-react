import React, {Component} from 'react'
import Header from "../Header/Header.js";
import RandomPlanet from '../RandomPlanet/RandomPlanet.js'
import ItemsList from '../ItemsList/ItemsList.js'
import ItemsDetails from '../ItemDetails/ItemDetails.js'
import './App.css'


export default class App extends Component {

    render() {
        return (
            <div>
            <Header />
            <RandomPlanet />
            <div className="block-wrapper">
            <ItemsList /><ItemsDetails />
            </div>
            </div>
        );
    }
}