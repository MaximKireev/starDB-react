import {withData} from '../hoc-components/itemsDataHandling.js'
import SwapiService from "../SwapiService.js";
import ItemsList from "../ItemsList/ItemsList.js";

const swapiservice = new SwapiService()

const { getAllPeople,
        getAllPlanets,
        getAllStarships} = swapiservice;

const PeopleList = withData(ItemsList, getAllPeople)
const PlanetsList =  withData(ItemsList, getAllPlanets)
const StarshipList = withData(ItemsList, getAllStarships)

export {
    PeopleList,
    PlanetsList,
    StarshipList
}