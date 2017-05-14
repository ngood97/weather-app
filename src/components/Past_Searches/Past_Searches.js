import React, { Component } from 'react';
import './Past_Searches.css';

class Past_Searches extends Component {
    /*shouldComponentUpdate(){
        const {fetching, pastCities, onListClick} = this.props
        if(fetching){
            return false;
        }
        return true;
    }*/
    // constructor(){
    //     var city;
    // }
    handleClick = e => {
        const { fetching, pastCities, onListClick } = this.props
        onListClick(e);
    }

    render () {
        const { fetching, pastCities, onListClick,updated } = this.props
        return (
            updated?
        <div id="PastCitiesList">
            <h2>Past Searches</h2>
            <ol className = "list" >
                {pastCities.map(pastCity =>
                    <li key={pastCity}>
                        <a href="#" onClick={() => this.handleClick(pastCity)}>{pastCity}</a>
                    </li>
                )}
            </ol>
        </div>
        :null
        )
    }
}

// for later : onClick={onListClick(pastCity)}

// Past_Searches.PropTypes = {
//     pastCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//     onListClick: PropTypes.func.isRequired
// }

export default Past_Searches