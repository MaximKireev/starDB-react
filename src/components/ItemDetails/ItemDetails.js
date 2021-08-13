import React, {Component} from 'react';
import Loader from "../Loader/Loader";
import ErrorBoundary from "../ErrorComponent/ErrorComponent";
import './ItemDetails.css'

export default class ItemsDetails extends Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        this.setState({loaded: true})
    }

    render() {
        const {loaded} = this.state
        const {selectedPlanet} = this.props.planets;

        return (
                    <ErrorBoundary>
                        {!loaded?<Loader /> : <PlanetView selectedPlanet = {selectedPlanet} />}
                    </ErrorBoundary>

        );
    }
}
const PlanetView = ({selectedPlanet}) => {

    return (
        <div className='item-details-wrapper w-50'>
            {selectedPlanet?
                <SelectedPlanet selectedPlanet = {selectedPlanet}/> :
                <DefaultPlanet />}
        </div>
    )
}

const DefaultPlanet = () => {
    return (
        <h3>No items to display</h3>
            )
}

const SelectedPlanet = ({selectedPlanet}) => {
    return (
        <React.Fragment>
            <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${selectedPlanet.id}.jpg`}
                 alt="info-img"
                 width='150px'
                 height='150px'/>

            <div className="list-group w-50">
                <h3 className= 'item-name'>{selectedPlanet.name}</h3>
                <a href="#" className="list-group-item list-group-item-action">{`Population: ${selectedPlanet.population}`}</a>
                <a href="#" className="list-group-item list-group-item-action">{`Rotaion period: ${selectedPlanet.rotationPeriod}`}</a>
                <a href="#" className="list-group-item list-group-item-action">{`Diameter: ${selectedPlanet .diameter}`}</a>
            </div>
        </React.Fragment>

    )
}
