import React, {Component} from 'react';


export default class SwapiService extends Component{

    _apiURL = 'https://swapi.dev/api';

    async getResources (url) {
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
    getAllPlanets(){
        return this.getResources('/planets/')
    }
    async getPlanet(id){
        let data = await this.getResources(`/planets/${id}`);
        return data
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


}
