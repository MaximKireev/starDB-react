import {Component} from 'react';


export default class SwapiService extends Component{

    _apiURL = 'https://www.swapi.tech/api';
    _imgURL = 'https://starwars-visualguide.com/assets/img'

     getResources = async (url) => {
        let response= await fetch(`${this._apiURL}${url}`);
        if(!response.ok){
            throw new Error(`Ups, smth goes wrong at ${this._apiURL}${url} with error ${response.status}`)}
        return await response.json();

    }
     getAllPeople = async() =>{
        let people = await this.getResources('/people/').then (res => res.results);
        return people.map(man => this._transformItem(man))
    }
    getPerson = async (id) =>{
        const person = await this.getResources(`/people/${id}`).then(res => res.result);

        return this._transformItem(person.properties, person.uid)
    }
     getAllPlanets = async() => {
        let planets = await this.getResources('/planets/').then (res => res.results);
        return planets.map(planet => this._transformItem(planet))
    }
    getPlanet = async (id) => {
        let planet = await this.getResources(`/planets/${id}`).then (res => res.result);

        return this._transformItem(planet.properties, planet.uid)
        }


    getAllStarships = async () => {
        const starships = await this.getResources('/starships/').then (res => res.results);
        return starships.map(starship => this._transformItem(starship))

    }
    getStarship = async (id) => {
        const starship = await this.getResources(`/starships/${id}`).then (res => res.result);
        return this._transformItem(starship.properties, starship.uid)
    }
    getAllVehicles = async () => {
        const vehicles = await this.getResources('/vehicles/').then (res => res.results);
        return vehicles.map(vehicle => this._transformItem(vehicle))
    }
    getVehicle = async (id) => {
        const vehicle = await this.getResources(`/vehicles/${id}`).then (res => res.result);
        return this._transformItem(vehicle.properties, vehicle.uid)
    }
    getPlanetImage = async (id) => {
         return await `${this._imgURL}/planets/${id}.jpg`
    }
    getPersonImage = async (id) => {
        return await `${this._imgURL}/characters/${id}.jpg`
    }
    getStarshipsImage = async (id) => {
        return await `${this._imgURL}/starships/${id}.jpg`
    }

    _transformItem = (item, uid) => {

        return {
            id: item.uid || uid,
            loaded: true,
            name: item.name || null,
            population: item.population || null,
            rotationPeriod: item.rotation_period || null,
            diameter: item.diameter || null,
            height: item.height || null,
            mass: item.mass || null,
            hair_color: item.hair_color || null,
            skin_color: item.skin_color || null,
            eye_color: item.eye_color || null,
            birth_year: item.birth_year || null,
            gender: item.gender || null,
            homeworld: item.homeworld || null,
            url: item.url || null,
            model: item.model || null,
            starship_class: item.starship_class || null,
            cost_in_credits: item.cost_in_credits || null,
            length: item.length || null
        }


    }
}
