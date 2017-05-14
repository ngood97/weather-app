import {connect} from 'react-redux';

import Image_And_Number from '../components/Image_And_Number';

const mapStateToPropsIN = (state) => {
    let foo;
     console.log("state at image number:\n   name:" +state.currCity.name +  "\n   weatherNameAbbr:" + state.currCity.weatherNameAbbr);
    if (state.currCity.weatherNameAbbr){
        foo = 'https://www.metaweather.com/static/img/weather/' + state.currCity.weatherNameAbbr + '.svg';

        console.log("~" + state.currCity.weatherNameAbbr);
    }
    return {
        url: foo,
        num: state.currCity.temperature,
        updated: state.firstUpdate,
    }
}

const mapDispatchToPropsIN = (dispatch) => {
    return {}
}

const imageAndNumber = connect(
    mapStateToPropsIN,
    mapDispatchToPropsIN
)(Image_And_Number)

export default imageAndNumber;

