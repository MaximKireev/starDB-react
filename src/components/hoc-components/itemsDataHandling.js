import React, {Component} from 'react';


const withData = (View, getData) => {
    return class extends Component{
        state = {
            displayData: [],
            loaded: false
        }
        componentDidMount() {
            this.renderAllItems();
        }

        async renderAllItems(){
            await getData().
            then(res => this.setState({displayData: res})).
            then(() => this.setState({loaded: true}))
        }
        render() {

            const { displayData, loaded } = this.state;
            return (
                <View {...this.props} displayData = {displayData} loaded = {loaded}/>
            )
        }


    }
}
export {withData}