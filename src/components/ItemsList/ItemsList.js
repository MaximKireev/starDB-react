import React, {Component} from 'react';
import SwapiService from "../SwapiService.js";
import './ItemsList.css'
import ErrorBoundary from '../ErrorComponent/ErrorComponent.js';
import Loader from "../Loader/Loader.js";



export default class ItemsList extends Component {


        swapi = new SwapiService();
        state = {
            allPlanets: [],
            selectedPlanet: null,
            errorOccurred: false,
            loaded: false
        }

        componentDidMount() {
            this.renderAllPlanets();
        }

   async renderAllPlanets(){

       await this.swapi.getAllPlanets().
            then(res => this.setState({allPlanets: res})).
           then(() => this.setState({loaded: true}))
    }

    render() {
        const {allPlanets, loaded} = this.state;


        const {onPlanetSelected} = this.props;


        return (
            <ErrorBoundary>
                  {loaded ? <PlanetsListFragment
                      allPlanets = {allPlanets}
                      onPlanetSelected = {onPlanetSelected} /> : <Loader />}
            </ErrorBoundary>
        );
    }
}

class PlanetsListFragment extends Component{

    render() {
        const {allPlanets, onPlanetSelected} = this.props;
        return (
            <div className="items-list-wrapper">
                {allPlanets.map(planet =>
                    <a href="#"
                       className="list-group-item list-group-item-action"
                       onClick={() => onPlanetSelected(planet.id)}
                       key = {planet.id}>{planet.name}</a>
                )}
            </div>
        )
    }


}




