import death_start_icon from "./death_start.png";
import React, {Component} from "react";

export default class ErrorBoundary extends Component{
    state = {
        hasError: false
    }
    componentDidCatch(error, errorInfo) {
        if(error){this.setState({hasError: true})}
    }

    render() {
        if(this.state.hasError) {
            return (<div className= 'error_wrapper'>
                <img src={death_start_icon}
                     alt="death_start"
                     className='death_star'
                     width = "50px"
                     height = "50px"/>
                <p>Uuuups, there is no such planet! :(</p>
            </div>);
        }
        return this.props.children
    }

}

