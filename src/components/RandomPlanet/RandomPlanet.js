import React, {Component} from 'react';
import './RandomPlanet.css'
import SwapiService from "../SwapiService.js";
import ItemDetailsLoader from '../Loader/ItemDetailsLoader'
import ErrorBoundary from '../ErrorComponent/ErrorComponent.js'


export default class RandomPlanet extends Component {

        swapi = new SwapiService();


        state = {
            id: 12,
            loaded: false,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
        }


    componentDidMount (){
        this.updatePlanet();
        
      // setInterval(this.updatePlanet,3000)
       }

     updatePlanet = () => {
         let randomPlanet = Math.floor(Math.random()*18)+2;
        return this.swapi.getPlanet(randomPlanet).
       then(planet =>  this.setState(planet));
    }



render() {
const {loaded } = this.state;

    return (
        <ErrorBoundary>
        <div className='planet-wrapper'>


            {loaded ? <PlanetFragment params = {this.state} /> : <ItemDetailsLoader />}

        </div>
            </ErrorBoundary>
    );
}
}

 class PlanetFragment extends Component{
       render(){
           const {name, population, rotationPeriod, diameter, id} = this.props.params;

           return (
        <React.Fragment>
            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${id}.jpg`}
                 alt="random-planet"
                 width='170px'
                 height='170px'/>
            <div className="planet-description">
                <h1 className="name">{name}</h1>
                <p className="population"><span>Population</span>: {population}</p>
                <p className="rotation-period"><span>Rotation-period:</span> {rotationPeriod}</p>
                <p className="diametr"><span>Diameter:</span> {diameter}</p>
            </div>
        </React.Fragment>
    )
       }
}