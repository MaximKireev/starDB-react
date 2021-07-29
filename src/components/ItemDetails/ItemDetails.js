import React, {Component} from 'react';
import './ItemDetails.css'

export default class ItemsDetails extends Component {
    render() {
        return (
            <div className='item-details-wrapper w-50'>
                <img src="https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/10.jpg"
                     alt="info-img"
                width='150px'
                height='150px'/>

                <div className="list-group w-50">
                    <h3 className= 'item-name'>Item Name</h3>
                    <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                </div>
            </div>
        );
    }
}