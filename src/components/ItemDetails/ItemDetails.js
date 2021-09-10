import React, {Component} from 'react';
import ErrorBoundary from "../ErrorComponent/ErrorComponent";
import './ItemDetails.css'

export default class ItemsDetails extends Component {
    state = {
        itemUrl: null
    }

    render() {
        const {item} = this.props;
        return (

                    <ErrorBoundary>

                        <div className='item-details-wrapper'>
                            {item?
                                <React.Fragment>
                                    <img src={item[1]}
                                         alt="info-img"
                                         width='150px'
                                         height='150px'/>

                                    <div className="list-group w-50">
                                        <h3 className= 'item-name'>{item[0].name}</h3>
                                        {React.Children.map(this.props.children, (child =>
                                            React.cloneElement((child),{item})))}
                                    </div>
                                </React.Fragment> :
                                <h3>No items to display</h3>}
                        </div>

                    </ErrorBoundary>

        );
    }
}



