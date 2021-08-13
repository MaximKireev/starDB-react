import React, {Component} from 'react';
import ErrorBoundary from '../ErrorComponent/ErrorComponent';
import Loader from "../Loader/Loader.js";
import SwapiService from "../SwapiService.js";


const ListViewHandler = (component, getDataforList) => {
    return class extends Component{
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
            return (
                <div></div>
            );
        }
    }
}

export default ListViewHandler()