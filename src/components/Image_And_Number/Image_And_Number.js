import React, { Component } from 'react';
import './Image_And_Number.css'

class Image_And_Number extends Component {
    
    render(){
        const {url,num,updated} = this.props;
        return(
            updated ?
            <div className="imageAndTempBox">
                <div className = "temperature" >
                <img className="weatherImage" src={url} alt='Weather'/> {Math.floor(num*10)/10}&deg;
                </div>
            </div>
            :null
        )
    };
}
//Image_And_Number.PropTypes = {
//    url: PropTypes.string.isRequired,
//    size: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
//    num: PropTypes.number.isRequired
//}

export default Image_And_Number