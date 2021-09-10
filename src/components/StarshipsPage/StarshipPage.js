import React, {Component} from 'react'

import './StarshipPage.css'

class StarshipPage extends Component {
    render() {
        return (
            <div className="block-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default StarshipPage