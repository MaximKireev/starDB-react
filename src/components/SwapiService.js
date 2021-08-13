import {Component} from 'react';


export default class SwapiService extends Component{

    _apiURL = 'https://www.swapi.tech/api/';

     getResources = async (url) => {
        let response= await fetch(`${this._apiURL}${url}`);
        if(!response.ok){
            throw new Error(`Ups, smth goes wrong at ${this._apiURL}${url} with error ${response.status}`)}
        return await response.json();

    }
    async getAllPeople(){
        return await this.getResources('/people/')
    }
    getPerson(id){
        return this.getResources(`/people/${id}`)
    }
     getAllPlanets = async() => {
        let planets = await this.getResources('/planets/');
        return planets.results.map(planet => this._transformPlanet(planet))
    }
    getPlanet = async (id) => {
        let planet = await this.getResources(`/planets/${id}`);

        return this._transformPlanet(planet.result.properties, planet.result.uid)
        }


    getAllStarships(){
        return this.getResources('/starships/')
    }
    getStarship(id){
        return this.getResources(`/starships/${id}`)
    }
    getAllVehicles(){
        return this.getResources('/vehicles/')
    }
    getVehicle(id){
        return this.getResources(`/vehicles/${id}`)
    }
    getAllFilms(){
        return this.getResources('/films/')
    }
    getFilm(id){
        return this.getResources(`/films/${id}`)
    }
    getAllSpecies(){
        return this.getResources('/species/')
    }
    getSpeci(id){
        return this.getResources(`/species/${id}`)
    }
    _transformPlanet = (planet, uid) => {

        //let id = this._extractId(planet.url)
        return {
            id: planet.uid || uid,
            loaded: true,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter}


    }
    _extractId = (url) => {
        let regex = /\/(\d{1,})$/;
        return Number(url.match(regex)[1]);
    }

}
