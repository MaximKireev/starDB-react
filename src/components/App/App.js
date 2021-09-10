import React, {Component} from 'react'
import Header from "../Header/Header.js";
import RandomPlanet from '../RandomPlanet/RandomPlanet.js'
import PlanetsPage from "../PlanetsPage/PlanetsPage";
import './App.css'
import PeoplePage from "../PeoplePage/PeoplePage";
import StarshipPage from '../StarshipsPage/StarshipPage.js'
import ErrorBoundary from "../ErrorComponent/ErrorComponent";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PeopleList,
        PlanetsList,
    StarshipList
        } from '../sw-components/Lists.js'
import ItemDetails from "../ItemDetails/ItemDetails";
import SwapiService from '../SwapiService'


export default class App extends Component {
    state = {
        Planet: null,
        Person: null,
        Starship: null}
    swapi = new SwapiService()
    setPlanetID (id) {
        const planet = this.swapi.getPlanet(id);
        const planetImg = this.swapi.getPlanetImage(id);

      return Promise.all([planet, planetImg]).then(vals =>
        this.setState({Planet: vals}))
    }
    setPersonID (id) {
       const person = this.swapi.getPerson(id);
       const personImg = this.swapi.getPersonImage(id);
        Promise.all([person, personImg]).then(vals =>
            this.setState({Person: vals}))
    }
    setStarshipID (id) {
         const starship = this.swapi.getStarship(id);
        const starshipImg = this.swapi.getStarshipsImage(id);
        Promise.all([starship, starshipImg]).then(vals =>
            this.setState({Starship: vals}))
    }

    render() {
        const {Planet, Person, Starship} = this.state;

        return (
            <div>
                <Router>
            <Header />
            <RandomPlanet />

                <Switch>
                    <div class="container">
                    <Route exact path = '/' ><h2>Welcome to the star Data base</h2></Route>
                    <Route path = '/planets/' component = {PlanetsPage}>
                    <PlanetsList onIdRequest = {(id) => this.setPlanetID(id) }/>
                    <ItemDetails item={ Planet }>
                        <Record field = 'climate' label = 'Climate'/>
                        <Record field = 'population' label = 'Population'/>
                        <Record field = 'diameter' label = 'Diameter'/>
                    </ItemDetails>

                    </Route>

                <Route path = '/people/' component ={PeoplePage}>
                    <PeopleList onIdRequest = {(id) => this.setPersonID(id) }/>
                             <ItemDetails item={ Person }>
                                 <Record field = 'gender' label = 'Gender'/>
                                 <Record field = 'eye_color' label = 'Eye color'/>
                             </ItemDetails>
                </Route>
                <Route path='/starships/' component = {StarshipPage}>
                    <StarshipList onIdRequest = {(id) => this.setStarshipID(id) }/>
                    <ItemDetails item={ Starship }>
                        <Record field = 'cost_in_credits' label = 'Cost'/>
                        <Record field = 'starship_class' label = 'Starship class'/>
                        <Record field = 'model' label = 'Model'/>
                    </ItemDetails>
                </Route>
                    </div>
                    </Switch>

                    </Router>
            </div>
        );
    }
}

const Record = ({field, label, item}) => {

    return(
        <div>
            <div>{label}: </div><div>{item[0][field]}</div>
        </div>
    )
}
export {Record}