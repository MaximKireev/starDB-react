import {Component} from 'react';


export default class SwapiService extends Component{

    _apiURL = 'https://www.swapi.tech/api';

     getResources = async (url) => {
        let response= await fetch(`${this._apiURL}${url}`);
        if(!response.ok){
            throw new Error(`Ups, smth goes wrong at ${this._apiURL}${url} with error ${response.status}`)}
        return await response.json();

    }
    async getAllPeople(){
        let people = await this.getResources('/people/').then (res => res.results);
        return people.map(man => this._transformItem(man))
    }
    getPerson(id){
        const person = this.getResources(`/people/${id}`).then(res => res.result);
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


    getAllStarships(){
        const starships = this.getResources('/starships/').then (res => res.results);
        return starships.map(starship => this._transformItem(starship))

    }
    getStarship(id){
        const starship = this.getResources(`/starships/${id}`).then (res => res.result);
        return this._transformItem(starship.properties, starship.uid)
    }
    getAllVehicles(){
        const vehicles = this.getResources('/vehicles/').then (res => res.results);
        return vehicles.map(vehicle => this._transformItem(vehicle))
    }
    getVehicle(id){
        const vehicle = this.getResources(`/vehicles/${id}`).then (res => res.result);
        return this._transformItem(vehicle.properties, vehicle.uid)
    }

    _transformItem = (item, uid) => {

        //let id = this._extractId(planet.url)
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
/*    _extractId = (url) => {
        let regex = /\/(\d{1,})$/;
        return Number(url.match(regex)[1]);
    }*/

}
