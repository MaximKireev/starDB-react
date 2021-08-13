import React, {Component} from 'react'
import Header from "../Header/Header.js";
import RandomPlanet from '../RandomPlanet/RandomPlanet.js'
import ItemsList from '../ItemsList/ItemsList.js'
import ItemsDetails from '../ItemDetails/ItemDetails.js'
import './App.css'
import SwapiService from "../SwapiService.js";


export default class App extends Component {

       constructor() {
           super();
           this.swapi = new SwapiService()
           this.state = {
               selectedPlanet: null,

           }
           this.setPlanet()
       }
    setPlanet(id){
          this.swapi.getPlanet(id).then(planet =>
              this.setState({selectedPlanet: planet})).catch((error) => {
              this.setState(
                  {errorCase: true})})


    }

    render() {
        return (
            <div>
            <Header />
            <RandomPlanet />
            <div className="block-wrapper">
            <ItemsList onPlanetSelected={(id) => this.setPlanet(id)}/>
            <ItemsDetails
            planets = {this.state}/>
            </div>
            </div>
        );
    }
}