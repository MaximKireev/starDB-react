import React, {Component} from 'react';
import './ItemsList.css'

export default class ItemsList extends Component {
    render() {
        return (
            <div className="items-list-wrapper">
                <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
            </div>
        );
    }
}