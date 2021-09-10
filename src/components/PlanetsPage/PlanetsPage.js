import React, {Component} from 'react'

import './PlanetsPage.css'

export default class PlanetsPage extends Component {
    render() {
        return (
            <div d-flex w-100>
                {this.props.children}
            </div>
        );
    }
}