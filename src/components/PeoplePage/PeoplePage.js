import React, {Component} from 'react'

import './PeoplePage.css'

export default class PeoplePage extends Component {
    render() {
        return (
            <div className="block-wrapper">
                {this.props.children}
            </div>
        );
    }
}