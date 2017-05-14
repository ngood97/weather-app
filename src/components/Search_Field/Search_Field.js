
import React, { Component, PropTypes } from 'react';
import './Search_Field.css';

class Search_Field extends Component{
    /*shouldComponentUpdate(){
        
        const {fetching, onButtonClick} = this.props
        if(fetching){
            return false;
        }
        return true;
    }*/
        
    
    handleChange = e => {
        if(e){
            this.city = e.value
        }
    }
    handleClick = e => {
        const {fetching, onButtonClick} = this.props
        onButtonClick(this.city)
    }
    
render(){
    
    // window.onbeforeunload = function() {
    //     if(document.getElementById('city')===null || document.getElementById('city').value===""){
    //         return;
    //     }
    //     else{
    //         return "resetti mom's spaghetti";
    //     }
    // }
    const {fetching, onButtonClick} = this.props
    return(
            <div>
                <input name="city" className = "textField"
                    type="text" id='city' placeholder="enter a city"/> <br/>
                <button className = "button"
                type="button" 
                onClick={() => {
                    if(document.getElementById('city')){
                        onButtonClick(document.getElementById('city').value);
                    }}}>
                Find weather!
                </button>
            </div>
    );
};
}



/*const Search_Field = ({fetching,onButtonClick}) => (
    <div>
                --test2--<br/>
                <input name="city" type="text" id='city' placeholder="enter a city"/><br/>
                <button 
                type="button" id = 'button'
                onClick={() => {
                    if(document.getElementById('city')){
                        onButtonClick(document.getElementById('city').value);
                    }
                }}>
                Find weather!
                </button>
            </div>
)



Search_Field.PropTypes = {
    fetching: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired
}*/

export default Search_Field;