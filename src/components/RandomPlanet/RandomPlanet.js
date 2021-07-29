import React, {Component} from 'react';
import './RandomPlanet.css'
import SwapiService from "../SwapiService.js";

export default class RandomPlanet extends Component {

    constructor() {
        super();
        this.swapi = new SwapiService ();
        this.state = {
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        }
        this.updatePlanet()

    }
    updatePlanet(){
        this.swapi.getPlanet(1).then(planet => {
            this.setState({

                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }
render() {



        const {name, population, rotationPeriod, diameter} = this.state;
    return (
        <div className='planet-wrapper'>
            <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/10.jpg"
                 alt="random-planet"
                 width='170px'
                 height='170px'/>
            <div className="planet-description">
                <h1 className="name">{name}</h1>
                <p className="population"><span>Population</span>: {population}</p>
                <p className="rotation-period"><span>Rotation-period:</span> {rotationPeriod}</p>
                <p className="diametr"><span>Diameter:</span> {diameter}</p>
            </div>
        </div>
    );
}
}